import ServicePageTemplate from '../../components/ServicePageTemplate'

export default function CraneWorkPage() {
  return (
    <ServicePageTemplate
      title="CRANE WORK"
      subtitle="Crane-Assisted Tree Removal Tahoe"
      heroImage="/gallery-3.jpg.webp"
      heroAlt="Crane tree removal in South Lake Tahoe by Tahoe Tree Titans"
      intro="Tahoe Tree Titans operates a full-size crane for large-scale tree removals throughout the Tahoe Basin. When a tree is too large, too close to structures, or in an area with no room for conventional felling, crane-assisted removal is the safest and most efficient solution. Our crane work sets us apart from most tree services in the region."
      details={['Full-Size Crane Operations', 'Precision Lifting', 'Tight Access Areas', 'Large Pine Removal', 'Zero Damage to Property', 'Residential & Commercial']}
      sections={[
        {
          heading: 'When Crane Work Is Necessary',
          body: "Many properties in South Lake Tahoe and the surrounding Sierra Nevada have large trees growing extremely close to homes, decks, fences, and power lines. Conventional felling — where the tree is dropped in a controlled direction — simply isn't possible in these situations. Crane-assisted removal allows us to lift tree sections straight up and clear of obstacles, placing them precisely where we want without risk to your property."
        },
        {
          heading: 'Our Crane Capabilities',
          body: "Our crane is capable of lifting entire tree sections weighing thousands of pounds with precision. Combined with our experienced climbing crew, we can dismantle even the tallest Sierra Nevada pines section by section, with each piece lifted cleanly away from structures. This method eliminates the risk of damage to roofs, fences, vehicles, and landscaping."
        },
        {
          heading: '20+ Years of High-Altitude Experience',
          body: "Operating a crane in mountainous terrain requires a level of experience and skill that most tree companies don't have. Our team has been performing crane-assisted tree removals in the Tahoe Basin for over a decade, navigating the unique challenges of steep driveways, tight residential lots, and large Sierra Nevada trees. We bring the same precision to every job regardless of size."
        },
        {
          heading: 'Free Evaluation for Crane Jobs',
          body: "Not sure if your tree requires crane work? We offer free property evaluations throughout South Lake Tahoe, Truckee, Tahoe City, Incline Village, and all surrounding areas. Our team will assess your specific situation and recommend the safest, most cost-effective approach."
        }
      ]}
      relatedServices={[
        { name: 'Tree Removal', path: '/services/tree-removal' },
        { name: 'Emergency Work', path: '/services/emergency-tree-service' },
        { name: 'Tree Limbing', path: '/services/tree-limbing' },
        { name: 'Stump Grinding', path: '/services/stump-grinding' },
      ]}
    />
  )
}
