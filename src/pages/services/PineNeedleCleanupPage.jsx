import ServicePageTemplate from '../../components/ServicePageTemplate'

export default function PineNeedleCleanupPage() {
  return (
    <ServicePageTemplate
      title="PINE NEEDLE CLEANUP"
      subtitle="Pine Needle Cleanup South Lake Tahoe"
      heroImage="/svc-pineneedle.png"
      heroAlt="Pine needle cleanup South Lake Tahoe by Tahoe Tree Titans"
      intro="In the Sierra Nevada, pine needle accumulation is a year-round reality — and a serious fire hazard. Tahoe Tree Titans provides thorough pine needle and debris cleanup services for roofs, gutters, decks, and surrounding property throughout South Lake Tahoe and the Tahoe Basin. Keeping your property clear of accumulated pine needles is one of the simplest and most effective things you can do to reduce your home's wildfire vulnerability."
      details={['Roof Clearing', 'Gutter Cleaning', 'Deck & Patio Cleanup', 'Ground Debris Removal', 'Fire Risk Reduction', 'Seasonal Service Available']}
      sections={[
        {
          heading: 'Why Pine Needles Are a Fire Hazard',
          body: "Dry pine needles are highly flammable — they ignite easily from embers carried on the wind during a wildfire. When pine needles accumulate on your roof, in your gutters, against your foundation, or in piles around your deck, they create direct pathways for fire to reach your home's structure. CAL FIRE and fire safety experts consistently cite debris accumulation as one of the primary ways homes ignite during wildfires. Regular pine needle cleanup is a critical part of any home hardening strategy."
        },
        {
          heading: 'Roof & Gutter Clearing',
          body: "Roofs and gutters are the most dangerous accumulation points for pine needles. A thick layer of pine needles on your roof combined with ember exposure can ignite quickly. Clogged gutters filled with pine needles are equally dangerous. Our team clears roofs and gutters thoroughly, removing all debris and ensuring your home's most vulnerable areas are protected."
        },
        {
          heading: 'Deck, Patio & Ground Cleanup',
          body: "Decks are another high-risk area — pine needles and debris accumulate under and around decks, creating concentrated fuel right against your home's structure. We clear decks, patios, and the surrounding ground areas, removing debris piles and reducing the fuel load immediately adjacent to your home."
        },
        {
          heading: 'Seasonal Maintenance Programs',
          body: "We offer seasonal pine needle cleanup throughout South Lake Tahoe and the Tahoe Basin. Regular maintenance keeps fuel accumulation under control and your property protected year-round. Call (530) 307-0808 to schedule a cleanup or discuss an ongoing maintenance program."
        }
      ]}
      relatedServices={[
        { name: 'Defensible Space', path: '/services/defensible-space' },
        { name: 'Wildfire Mitigation', path: '/services/wildfire-mitigation' },
        { name: 'Tree Limbing', path: '/services/tree-limbing' },
        { name: 'Ornamental Pruning', path: '/services/ornamental-pruning' },
      ]}
    />
  )
}
