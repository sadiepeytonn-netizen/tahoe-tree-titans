import ServicePageTemplate from '../../components/ServicePageTemplate'

export default function EmergencyWorkPage() {
  return (
    <ServicePageTemplate
      title="EMERGENCY TREE SERVICE"
      subtitle="24/7 Emergency Response Tahoe"
      heroImage="/svc-emergency.png"
      heroAlt="Emergency tree service South Lake Tahoe"
      intro="When a tree falls on your home, blocks your driveway after a storm, or poses an immediate threat to your family's safety — Tahoe Tree Titans responds fast. We provide emergency tree services throughout South Lake Tahoe and the Tahoe Basin, often arriving the same day you call. Don't wait when a tree is threatening your property."
      details={['Same-Day Response', 'Storm Damage Cleanup', 'Fallen Tree Removal', 'Hazard Mitigation', 'Insurance Documentation', '24/7 Availability']}
      sections={[
        {
          heading: 'Tahoe Winters Create Tree Emergencies',
          body: "The Sierra Nevada experiences some of the heaviest snowfall in North America. Heavy snow loads, ice storms, and high winds regularly bring trees down across the Tahoe Basin — often onto homes, vehicles, and power lines. When this happens, you need a team that can respond immediately and safely remove the threat. Tahoe Tree Titans is that team."
        },
        {
          heading: 'Same-Day Emergency Response',
          body: "We understand that tree emergencies can't wait for a scheduled appointment. When you call us with an urgent situation, we prioritize your job and get our crew to your property as fast as possible. Our team is equipped and ready to handle everything from a single fallen branch threatening a roof to a full tree collapse requiring crane removal."
        },
        {
          heading: 'Insurance Documentation',
          body: "Dealing with insurance after storm damage is stressful enough. Our team can provide the documentation your insurance company needs, including photos, written assessments, and detailed invoices. We work with homeowners throughout the claims process to make the experience as smooth as possible."
        },
        {
          heading: 'Don\'t Wait — Call Now',
          body: "If a tree is on your roof, blocking access to your home, or leaning dangerously after a storm, call Tahoe Tree Titans immediately at (530) 307-0808. We serve South Lake Tahoe, Stateline, Meyers, Tahoe City, Truckee, Incline Village, and all surrounding areas."
        }
      ]}
      relatedServices={[
        { name: 'Tree Removal', path: '/services/tree-removal' },
        { name: 'Crane Work', path: '/services/crane-work' },
        { name: 'Tree Limbing', path: '/services/tree-limbing' },
        { name: 'Defensible Space', path: '/services/defensible-space' },
      ]}
    />
  )
}
