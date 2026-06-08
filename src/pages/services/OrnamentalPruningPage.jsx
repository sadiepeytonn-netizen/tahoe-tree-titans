import ServicePageTemplate from '../../components/ServicePageTemplate'

export default function OrnamentalPruningPage() {
  return (
    <ServicePageTemplate
      title="ORNAMENTAL PRUNING"
      subtitle="Tree Pruning South Lake Tahoe"
      heroImage="/svc-ornamental.png"
      heroAlt="Ornamental tree pruning South Lake Tahoe by Tahoe Tree Titans"
      intro="Ornamental pruning is both an art and a science. Tahoe Tree Titans provides expert pruning for ornamental trees and shrubs throughout South Lake Tahoe and the Tahoe Basin — shaping for beauty, promoting healthy structure, and maintaining the long-term vitality of your landscape. Our certified arborist ensures every cut is made with the tree's health in mind."
      details={['Crown Shaping', 'Vista Pruning', 'Deadwood Removal', 'Seasonal Pruning', 'Canopy Management', 'Certified Arborist']}
      sections={[
        {
          heading: 'The Difference Between Pruning and Trimming',
          body: "Many tree companies offer trimming — cutting back branches to a set size. Ornamental pruning is different. It's a deliberate, thoughtful process of selectively removing specific branches to improve the tree's structure, encourage healthy growth, enhance its natural form, and protect your property. A poorly pruned tree can be permanently damaged; a well-pruned tree becomes more beautiful and resilient every year."
        },
        {
          heading: 'Vista Pruning for Tahoe Views',
          body: "One of the most popular pruning services we provide in the Tahoe Basin is vista pruning — selectively removing branches to open up views of Lake Tahoe, the surrounding mountains, and the Sierra Nevada sky. This requires careful planning and precise cuts to achieve the desired view without compromising the health or structure of the tree. Our team has extensive experience creating and maintaining stunning views for Tahoe homeowners."
        },
        {
          heading: 'Certified Arborist on Every Job',
          body: "Tahoe Tree Titans has a certified arborist on the team, ensuring that every pruning decision is made with proper horticultural knowledge. We assess the species, age, health, and structure of each tree before recommending a pruning approach, ensuring the best outcome for your trees and your property."
        },
        {
          heading: 'Serving South Lake Tahoe & Surrounding Communities',
          body: "We provide ornamental pruning throughout South Lake Tahoe, Tahoe City, Kings Beach, Incline Village, Truckee, and all surrounding areas. Call (530) 307-0808 for a free evaluation."
        }
      ]}
      relatedServices={[
        { name: 'Tree Limbing', path: '/services/tree-limbing' },
        { name: 'Defensible Space', path: '/services/defensible-space' },
        { name: 'Tree Removal', path: '/services/tree-removal' },
        { name: 'Pine Needle Cleanup', path: '/services/pine-needle-cleanup' },
      ]}
    />
  )
}
