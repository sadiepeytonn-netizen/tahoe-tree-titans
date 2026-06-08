import ServicePageTemplate from '../../components/ServicePageTemplate'

export default function TreeLimbingPage() {
  return (
    <ServicePageTemplate
      title="TREE LIMBING"
      subtitle="Professional Tree Limbing Tahoe"
      heroImage="/svc-limbing.png"
      heroAlt="Tree limbing South Lake Tahoe by Tahoe Tree Titans"
      intro="Tree limbing — also known as crown raising or limb removal — is one of the most effective ways to protect your property, reduce fire risk, and improve the health and structure of your trees. Tahoe Tree Titans provides professional tree limbing services throughout South Lake Tahoe and the Sierra Nevada, performed by experienced climbers who understand the local tree species."
      details={['Crown Raising', 'Hazard Limb Removal', 'Weight Reduction', 'Clearance Trimming', 'Fire Ladder Fuel Removal', 'Structural Improvement']}
      sections={[
        {
          heading: 'What Is Tree Limbing?',
          body: "Tree limbing involves the selective removal of lower branches to raise the crown of the tree, improve clearance, reduce weight, and eliminate dead or hazardous limbs. In the Tahoe Basin, limbing is also critical for wildfire mitigation — removing ladder fuels that can carry ground fires up into the tree canopy is one of the most important fire safety measures a homeowner can take."
        },
        {
          heading: 'Fire Ladder Fuel Management',
          body: "In the Sierra Nevada, ladder fuels — low-hanging branches that allow fire to climb from ground level into the tree canopy — are one of the primary drivers of catastrophic wildfires. CAL FIRE and the US Forest Service both recommend removing ladder fuels as part of any defensible space plan. With 7 years of US Forest Service experience on our team, Tahoe Tree Titans brings expert-level knowledge to every limbing job."
        },
        {
          heading: 'Protecting Your Structures',
          body: "Overhanging limbs pose a constant threat to roofs, gutters, decks, and windows — especially under heavy snow loads. Our limbing service removes these hazards while preserving the overall health and beauty of your trees. We carefully assess each limb before removal, ensuring we only take what's necessary to achieve the desired clearance and safety."
        },
        {
          heading: 'Serving the Entire Tahoe Basin',
          body: "We provide tree limbing services throughout South Lake Tahoe, Tahoe City, Truckee, Incline Village, Kings Beach, Meyers, and all surrounding communities. Call (530) 307-0808 for a free property evaluation."
        }
      ]}
      relatedServices={[
        { name: 'Tree Removal', path: '/services/tree-removal' },
        { name: 'Defensible Space', path: '/services/defensible-space' },
        { name: 'Wildfire Mitigation', path: '/services/wildfire-mitigation' },
        { name: 'Ornamental Pruning', path: '/services/ornamental-pruning' },
      ]}
    />
  )
}
