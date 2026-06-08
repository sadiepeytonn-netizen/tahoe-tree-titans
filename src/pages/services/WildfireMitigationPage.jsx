import ServicePageTemplate from '../../components/ServicePageTemplate'

export default function WildfireMitigationPage() {
  return (
    <ServicePageTemplate
      title="WILDFIRE MITIGATION"
      subtitle="Wildfire Mitigation South Lake Tahoe"
      heroImage="/svc-wildfire.png"
      heroAlt="Wildfire mitigation South Lake Tahoe by Tahoe Tree Titans"
      intro="Wildfire mitigation goes beyond basic defensible space. Tahoe Tree Titans provides comprehensive fuel load reduction, canopy management, and forest thinning services for homeowners, HOAs, and property managers throughout South Lake Tahoe and the Sierra Nevada. With 7 years of US Forest Service fire and fuels management experience on our team, we bring professional-grade wildfire mitigation to every property we work on."
      details={['Fuel Load Reduction', 'Forest Thinning', 'Canopy Spacing', 'Ladder Fuel Removal', 'US Forest Service Methods', 'Large Property Capability']}
      sections={[
        {
          heading: 'Understanding Wildfire Risk in the Tahoe Basin',
          body: "The Lake Tahoe Basin faces significant and growing wildfire risk. Decades of fire suppression have created unnaturally dense forests with high fuel loads, while climate change is producing hotter, drier conditions that make fires more intense and harder to control. The Caldor Fire in 2021 burned to the edge of South Lake Tahoe, demonstrating just how real this threat is. Proper wildfire mitigation is no longer optional for Tahoe homeowners — it's essential."
        },
        {
          heading: 'Professional-Grade Fuel Reduction',
          body: "Our wildfire mitigation work is based on the same science and methods used by the US Forest Service. We assess fuel loads, fire behavior potential, and structural vulnerability to develop a mitigation plan tailored to your specific property. This includes strategic tree removal to increase canopy spacing, ladder fuel elimination, brush clearing, and the creation of natural firebreaks. The goal is to reduce fire intensity to a level where your home has a realistic chance of survival."
        },
        {
          heading: 'Large Property & HOA Services',
          body: "Tahoe Tree Titans has the equipment and crew capacity to handle large-scale wildfire mitigation projects for multi-acre properties, HOA common areas, and commercial properties. We can work with HOAs and property managers to develop and implement comprehensive fuel reduction plans that protect entire neighborhoods."
        },
        {
          heading: 'Serving South Lake Tahoe & the Sierra Nevada',
          body: "We provide wildfire mitigation throughout South Lake Tahoe, Meyers, Tahoe City, Truckee, Incline Village, Kings Beach, and all surrounding Sierra Nevada communities. Call (530) 307-0808 for a free evaluation."
        }
      ]}
      relatedServices={[
        { name: 'Defensible Space', path: '/services/defensible-space' },
        { name: 'Tree Limbing', path: '/services/tree-limbing' },
        { name: 'Tree Removal', path: '/services/tree-removal' },
        { name: 'Pine Needle Cleanup', path: '/services/pine-needle-cleanup' },
      ]}
    />
  )
}
