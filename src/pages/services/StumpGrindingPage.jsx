import ServicePageTemplate from '../../components/ServicePageTemplate'

export default function StumpGrindingPage() {
  return (
    <ServicePageTemplate
      title="STUMP GRINDING"
      subtitle="Stump Grinding South Lake Tahoe"
      heroImage="/gallery-9.webp.webp"
      heroAlt="Stump grinding South Lake Tahoe by Tahoe Tree Titans"
      intro="After a tree is removed, the stump that remains can be an eyesore, a tripping hazard, and an obstacle that prevents you from fully using your yard. Tahoe Tree Titans provides professional stump grinding throughout South Lake Tahoe and the Tahoe Basin, grinding stumps completely below grade so you can reclaim your property."
      details={['Below-Grade Grinding', 'All Stump Sizes', 'Complete Debris Cleanup', 'Yard Restoration Ready', 'Residential & Commercial', 'Fast Service']}
      sections={[
        {
          heading: 'Why Remove the Stump?',
          body: "Tree stumps left in the ground don't just look bad — they can attract insects, harbor fungal disease that spreads to nearby healthy trees, and create tripping hazards for children and adults. In areas prone to wildfire, old stumps can also act as fuel. Stump grinding is the fastest, cleanest way to eliminate these problems and prepare the area for new landscaping, grass, or construction."
        },
        {
          heading: 'Our Stump Grinding Process',
          body: "We use commercial-grade stump grinding equipment to grind stumps 6 to 12 inches below the soil surface, depending on your needs. The grinding process turns the stump into clean wood chips that can be used as mulch or removed from the site entirely. Once complete, the area is ready for seeding, planting, or construction with no unsightly stump remaining."
        },
        {
          heading: 'Bundled with Tree Removal',
          body: "Stump grinding is available as a standalone service or bundled with any tree removal. Bundling saves you time and money — our crew can grind the stump immediately after removal while all equipment is already on site. Ask us about stump grinding when you schedule your tree removal evaluation."
        },
        {
          heading: 'Serving South Lake Tahoe & Beyond',
          body: "We provide stump grinding throughout South Lake Tahoe, Meyers, Stateline, Tahoe City, Truckee, Incline Village, and all surrounding areas. Call (530) 307-0808 for a free estimate."
        }
      ]}
      relatedServices={[
        { name: 'Tree Removal', path: '/services/tree-removal' },
        { name: 'Crane Work', path: '/services/crane-work' },
        { name: 'Pine Needle Cleanup', path: '/services/pine-needle-cleanup' },
        { name: 'Defensible Space', path: '/services/defensible-space' },
      ]}
    />
  )
}
