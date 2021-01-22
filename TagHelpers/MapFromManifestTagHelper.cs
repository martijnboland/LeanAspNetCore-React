using Microsoft.AspNetCore.Mvc.Razor.TagHelpers;
using Microsoft.AspNetCore.Mvc.Routing;
using Microsoft.AspNetCore.Razor.TagHelpers;
using System.Linq;
using System.Text.Encodings.Web;
using System.Threading.Tasks;

namespace LeanAspNetCore.TagHelpers
{
    [HtmlTargetElement("script", Attributes = "src")]
    public class MapFromManifestTagHelper : UrlResolutionTagHelper
    {
        private const string attributeName = "map-src-from-manifest";

        public MapFromManifestTagHelper(IUrlHelperFactory urlHelperFactory, HtmlEncoder htmlEncoder) : base(urlHelperFactory, htmlEncoder)
        {
            var test = "";
        }

        public override Task ProcessAsync(TagHelperContext context, TagHelperOutput output)
        {
            if (context.AllAttributes.Any(a => a.Name == attributeName))
            {
                // get src attribute value from manifest and rewrite
                var test = "";
            }
            return base.ProcessAsync(context, output);
        }
    }
}
