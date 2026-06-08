import ServicePageTemplate from '../../components/ServicePageTemplate'

export default function TreeRemovalPage() {
  return (
    <ServicePageTemplate
      title="TREE REMOVAL"
      subtitle="South Lake Tahoe Tree Removal"
      heroImage="/gallery-4.webp.webp"
      heroAlt="Tree removal in South Lake Tahoe by Tahoe Tree Titans"
      intro="Tahoe Tree Titans provides safe, professional tree removal services throughout South Lake Tahoe, Truckee, Tahoe City, and the entire Sierra Nevada basin. Whether you're dealing with a hazardous tree threatening your home, a dead or diseased pine, or simply need to clear space on your property, our experienced crew handles every job with precision and care."
      details={['Hazard Assessment', 'Crane-Assisted Removal', 'Complete Site Cleanup', 'Stump Grinding Available', 'Insurance Documentation', 'All Tree Sizes']}
      sections={[
        {
          heading: 'Why Tree Removal Matters in the Tahoe Basin',
          body: "The Sierra Nevada is home to massive ponderosa pines, Jeffrey pines, white firs, and incense cedars — many growing 80 to 120 feet tall. When these trees become diseased, structurally compromised, or positioned too close to your home, they represent a serious safety and fire risk. At Tahoe Tree Titans, we assess every tree carefully before any cut is made, ensuring the safest and most efficient removal method for your specific situation."
        },
        {
          heading: 'Our Tree Removal Process',
          body: "Every tree removal starts with a thorough site assessment. We evaluate the tree's lean, root structure, surrounding obstacles, and access points. For large or difficult trees, we deploy our crane for precision removal — lifting sections clear of structures without damage. Our crew handles everything from the initial cut to complete debris removal and site cleanup, leaving your property clean and safe."
        },
        {
          heading: 'Licensed, Insured & Local',
          body: "Tahoe Tree Titans is fully licensed and insured, with a certified arborist on the team and over 20 years of combined experience in the Tahoe Basin. We know the local terrain, the local trees, and the specific challenges of working in the Sierra Nevada. When you hire us, you get professionals who have been removing trees in this exact environment for over a decade."
        },
        {
          heading: 'Serving All of South Lake Tahoe & Surrounding Areas',
          body: "We provide tree removal services throughout South Lake Tahoe, Stateline NV, Meyers, Tahoe City, Kings Beach, Incline Village, Truckee, Echo Lake, Fallen Leaf Lake, and more. No job is too big or too remote. Call us today for a free property evaluation and estimate."
        }
      ]}
      relatedServices={[
        { name: 'Crane Work', path: '/services/crane-work' },
        { name: 'Stump Grinding', path: '/services/stump-grinding' },
        { name: 'Emergency Work', path: '/services/emergency-tree-service' },
        { name: 'Defensible Space', path: '/services/defensible-space' },
      ]}
    />
  )
}
