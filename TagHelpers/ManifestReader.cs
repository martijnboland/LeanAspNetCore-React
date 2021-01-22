using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Routing;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;

namespace LeanAspNetCore.TagHelpers
{
    public class ManifestReader
    {
        private readonly string _manifestFolder;
        private readonly IWebHostEnvironment _env;
        private Dictionary<string, ManifestEntry> _manifest;
        private readonly IUrlHelperFactory _urlHelperFactory;

        public ManifestReader(IWebHostEnvironment env, IUrlHelperFactory urlHelperFactory, string manifestFolder = "dist")
        {
            _manifestFolder = manifestFolder;
            _env = env;
            _manifest = new Dictionary<string, ManifestEntry>();

            ReadManifest();
            _urlHelperFactory = urlHelperFactory;
        }

        private void ReadManifest()
        {
            var manifestPath = Path.Combine(_env.WebRootPath, _manifestFolder, "manifest.json");
            if (! File.Exists(manifestPath))
            {
                throw new ArgumentException($"No manifest.json file found at wwwroot {_env.WebRootPath} and manifest folder {_manifestFolder}");
            }
            var jsonString = File.ReadAllText(manifestPath);
            _manifest = JsonSerializer.Deserialize<Dictionary<string, ManifestEntry>>(jsonString);
        }

        public string ResolveHashedPath(string assetName)
        {
            if (_manifest.TryGetValue(assetName, out ManifestEntry entry))
            {
                return entry.file;
            }
            throw new ArgumentException($"The manifest entry {assetName} was not found");
        }
    }

    public class ManifestEntry
    {
        public string file { get; set; }
        public string[] imports { get; set; }
        public string[] dynamicImports { get; set; }
    }
}
