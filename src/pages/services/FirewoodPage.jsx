import ServicePageTemplate from '../../components/ServicePageTemplate'

export default function FirewoodPage() {
  return (
    <ServicePageTemplate
      title="FIREWOOD"
      subtitle="Firewood South Lake Tahoe"
      heroImage="/svc-firewood.png"
      heroAlt="Firewood delivery South Lake Tahoe by Tahoe Tree Titans"
      intro="Tahoe Tree Titans offers seasoned Sierra Nevada firewood sourced directly from our tree removal work throughout the Tahoe Basin. Quality split and stacked firewood, ready to burn — perfect for Tahoe winters. When we remove trees from properties across the region, that wood gets processed into firewood rather than going to waste."
      details={['Split & Seasoned', 'Local Sierra Nevada Wood', 'Delivery Available', 'Bulk Orders Welcome', 'Mixed Hardwood & Softwood', 'South Lake Tahoe Area']}
      sections={[
        {
          heading: 'Local Wood, Zero Waste',
          body: "All of our firewood comes from trees we remove on properties throughout South Lake Tahoe and the Tahoe Basin. Rather than chipping or hauling away perfectly good wood, we process it into firewood and offer it back to the community. This means you're getting locally sourced wood from the actual Sierra Nevada — not shipped in from elsewhere."
        },
        {
          heading: 'Split, Stacked & Ready to Burn',
          body: "Our firewood is properly split and given adequate time to season, ensuring you get wood that lights easily and burns cleanly. Sierra Nevada wood — primarily ponderosa pine, Jeffrey pine, white fir, and incense cedar — produces excellent heat for Tahoe winters. Whether you need a cord for the season or a smaller amount for occasional fires, we can accommodate your needs."
        },
        {
          heading: 'Delivery Available',
          body: "We deliver firewood throughout South Lake Tahoe, Stateline, Meyers, and surrounding areas. Bulk orders for the full season are available and can be stacked on your property if needed. Call (530) 307-0808 to check current availability and pricing."
        },
        {
          heading: 'Bundle with Tree Removal',
          body: "If we're removing trees from your property, you may have the option to keep some of the wood as firewood rather than having it removed. Ask about this option when you schedule your free evaluation — it can be a great way to get quality firewood at reduced cost."
        }
      ]}
      relatedServices={[
        { name: 'Tree Removal', path: '/services/tree-removal' },
        { name: 'Stump Grinding', path: '/services/stump-grinding' },
        { name: 'Defensible Space', path: '/services/defensible-space' },
        { name: 'Pine Needle Cleanup', path: '/services/pine-needle-cleanup' },
      ]}
    />
  )
}
