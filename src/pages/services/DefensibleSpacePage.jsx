import ServicePageTemplate from '../../components/ServicePageTemplate'

export default function DefensibleSpacePage() {
  return (
    <ServicePageTemplate
      title="DEFENSIBLE SPACE"
      subtitle="Defensible Space South Lake Tahoe"
      heroImage="/gallery-5.webp.webp"
      heroAlt="Defensible space creation South Lake Tahoe by Tahoe Tree Titans"
      intro="Creating defensible space around your home is the single most important thing you can do to protect your property from wildfire in the Sierra Nevada. Tahoe Tree Titans provides comprehensive defensible space services throughout South Lake Tahoe and the Tahoe Basin, ensuring your property meets CAL FIRE Zone 1 and Zone 2 requirements — and more importantly, giving your home the best possible chance of surviving a wildfire."
      details={['Zone 1 & 2 Compliance', 'CAL FIRE Standards', 'Ladder Fuel Removal', 'Brush Clearing', 'HOA Compliance', 'Insurance Requirements']}
      sections={[
        {
          heading: 'What Is Defensible Space?',
          body: "Defensible space is a buffer zone of cleared and well-maintained vegetation between your home and the surrounding forest. CAL FIRE requires two zones: Zone 1 extends 0 to 30 feet from your home and must be cleared of dead plants, grass, and weeds while keeping trees and shrubs well-spaced and pruned. Zone 2 extends 30 to 100 feet and requires reducing the density of trees and shrubs while eliminating ladder fuels. Proper defensible space slows the spread of wildfire and gives firefighters a safer area to defend your home."
        },
        {
          heading: '7 Years of US Forest Service Experience',
          body: "Josh, the owner of Tahoe Tree Titans, spent 7 years working in fire and fuels management with the US Forest Service — serving on handcrews, engines, and fuels management teams. This isn't just tree service work; it's professional wildfire mitigation backed by years of actual fire behavior experience. When Tahoe Tree Titans creates defensible space on your property, you're getting the same expertise the Forest Service uses to protect public lands."
        },
        {
          heading: 'Insurance & HOA Compliance',
          body: "Many insurance companies in California now require documented defensible space compliance before issuing or renewing homeowner's insurance. HOAs in the Tahoe Basin also increasingly require compliance with state fire safety standards. Our team can assess your property, perform the necessary work, and provide the documentation you need to satisfy both insurance and HOA requirements."
        },
        {
          heading: 'Free Defensible Space Evaluation',
          body: "Not sure if your property meets CAL FIRE requirements? Call Tahoe Tree Titans at (530) 307-0808 for a free defensible space evaluation. We serve all of South Lake Tahoe, Stateline, Meyers, Tahoe City, Truckee, Incline Village, and the entire Sierra Nevada basin."
        }
      ]}
      relatedServices={[
        { name: 'Wildfire Mitigation', path: '/services/wildfire-mitigation' },
        { name: 'Tree Limbing', path: '/services/tree-limbing' },
        { name: 'Tree Removal', path: '/services/tree-removal' },
        { name: 'Pine Needle Cleanup', path: '/services/pine-needle-cleanup' },
      ]}
    />
  )
}
