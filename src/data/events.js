// All event images served from /public/events/ — not bundled into JS
const E = (file) => `/events/${file}`

// Returns the full events list. Accepts the translation object `t` so names/descriptions are localised.
export function getEvents(t) {
  return [
    {
      id: 'comforte-breakfast',
      name: t.event1Name,
      venue: t.event1Venue,
      year: '2024',
      category: t.event1Category,
      photos: [
        { src: E('breakfast-session-with-proxynet-and-comforte-at-radisson-blue.jpg'),  caption: t.event1PhotoCaption },
        { src: E('breakfast-session-with-proxynet-and-comforte-at-radisson-blue2.jpg'), caption: t.event1PhotoCaption },
        { src: E('breakfast-session-with-proxynet-and-comforte-at-radisson-blue3.jpg'), caption: t.event1PhotoCaption },
        { src: E('breakfast-session-with-proxynet-and-comforte-at-radisson-blue4.jpg'), caption: t.event1PhotoCaption },
      ],
      featured: true,
      desc: t.event1Desc,
    },
    {
      id: 'huawei-portharcourt',
      name: t.event2Name,
      venue: t.event2Venue,
      year: '2025',
      category: t.event2Category,
      photos: [
        { src: E('huawei.jpg'),                       caption: t.event2PhotoCaption },
        { src: E('huawei2.jpg'),                      caption: t.event2PhotoCaption },
        { src: E('huaweiportharcourtexperience.jpg'),  caption: t.event2PhotoCaption },
      ],
      featured: true,
      desc: t.event2Desc,
    },
    {
      id: 'unilumin-lagos-2026',
      name: t.event3Name,
      venue: t.event3Venue,
      year: '2026',
      category: t.event3Category,
      photos: [],
      featured: true,
      theme: t.event3Theme,
      date: t.event3Date,
      desc: t.event3Desc,
    },
    {
      id: 'huawei-2025-experience',
      name: t.huawei2025ExpName,
      venue: t.huawei2025ExpVenue,
      year: '2025',
      category: t.huawei2025ExpCategory,
      date: t.huawei2025ExpDate,
      photos: [
        { src: E('huawei-2025.jpg'), caption: t.huawei2025ExpName }
      ],
      featured: true,
      desc: t.huawei2025ExpDesc,
    },
    {
      id: 'gitex-kenya',
      name: t.gitexKenyaName,
      venue: t.gitexKenyaVenue,
      year: '2025',
      category: t.gitexKenyaCategory,
      photos: [
        { src: E('grouppicturegitexkenya.jpg'), caption: t.gitexKenyaPhotoCaption }
      ],
      featured: true,
      desc: t.gitexKenyaDesc,
    },
    {
      id: 'robo-xplore-original',
      name: t.roboXplore1Name,
      venue: t.roboXplore1Venue,
      year: '2026',
      category: t.roboXplore1Category,
      date: t.roboXplore1Date,
      photos: [
        { src: E('roboexplore1.jpg'), caption: t.roboXplore1Name }
      ],
      featured: true,
      desc: t.roboXplore1Desc,
    },
    {
      id: 'robo-xplore-2026',
      name: t.roboXplore2Name,
      venue: t.roboXplore2Venue,
      year: '2026',
      category: t.roboXplore2Category,
      date: t.roboXplore2Date,
      photos: [
        { src: E('roboexplore-2-group.jpg'), caption: t.roboXplore2Name }
      ],
      featured: true,
      desc: t.roboXplore2Desc,
    },
    {
      id: 'unilumin-led-training',
      name: t.uniluminLedTrainingName,
      venue: t.uniluminLedTrainingVenue,
      year: '2026',
      category: t.uniluminLedTrainingCategory,
      date: t.uniluminLedTrainingDate,
      photos: [
        { src: E('uniluminledtraininggroup.jpg'), caption: t.uniluminLedTrainingName }
      ],
      featured: true,
      desc: t.uniluminLedTrainingDesc,
    },
    {
      id: 'zenith-tech-fair',
      name: t.zenithTechFairName,
      venue: t.zenithTechFairVenue,
      year: '2025',
      category: t.zenithTechFairCategory,
      photos: [
        { src: E('zenith-tech-fair-group-photo.jpg'), caption: t.zenithTechFairName }
      ],
      featured: true,
      desc: t.zenithTechFairDesc,
    },
    {
      id: 'beyondtrust-event',
      name: t.beyondTrustEventName,
      venue: t.beyondTrustEventVenue,
      year: '2025',
      category: t.beyondTrustEventCategory,
      date: t.beyondTrustEventDate,
      photos: [
        { src: E('beyond-trust-group.jpg'), caption: t.beyondTrustEventName }
      ],
      featured: true,
      desc: t.beyondTrustEventDesc,
    },
    {
      id: 'huawei-clearance-sales',
      name: t.huaweiClearanceName,
      venue: t.huaweiClearanceVenue,
      year: '2025',
      category: t.huaweiClearanceCategory,
      photos: [],
      featured: true,
      desc: t.huaweiClearanceDesc,
    },
    {
      id: 'gitex-nigeria-day1',
      name: t.gitexNigeriaDay1Name,
      venue: t.gitexNigeriaDay1Venue,
      year: '2025',
      category: t.gitexNigeriaDay1Category,
      date: t.gitexNigeriaDay1Date,
      photos: [
        { src: E('gitex-nigeria-2025-team-photo.jpg'), caption: t.gitexNigeriaDay1Name }
      ],
      featured: true,
      desc: t.gitexNigeriaDay1Desc,
    },
    {
      id: 'proxynet-unilumin-experience',
      name: t.proxynetUniluminExpName,
      venue: t.proxynetUniluminExpVenue,
      year: '2026',
      category: t.proxynetUniluminExpCategory,
      date: t.proxynetUniluminExpDate,
      photos: [
        { src: E('unilumin-experience-team-photo.jpg'),            caption: t.proxynetUniluminExpName },
        { src: E('whatsapp-image-2026-07-31-at-10.29.08-1-.jpeg'), caption: t.proxynetUniluminExpName },
        { src: E('whatsapp-image-2026-07-31-at-10.29.08-2-.jpeg'), caption: t.proxynetUniluminExpName },
        { src: E('whatsapp-image-2026-07-31-at-10.29.08.jpeg'),    caption: t.proxynetUniluminExpName },
      ],
      featured: true,
      desc: t.proxynetUniluminExpDesc,
    },
    {
      id: 'huawei-s3-launch',
      name: t.huaweiS3LaunchName,
      venue: t.huaweiS3LaunchVenue,
      year: '2026',
      category: t.huaweiS3LaunchCategory,
      date: t.huaweiS3LaunchDate,
      photos: [
        { src: E('huawei-s3-launch-group.jpg'), caption: t.huaweiS3LaunchName }
      ],
      featured: true,
      desc: t.huaweiS3LaunchDesc,
    },
    {
      id: 'huawei-ideahub-s3-abuja',
      name: t.huaweiS3AbujaName,
      venue: t.huaweiS3AbujaVenue,
      year: '2026',
      category: t.huaweiS3AbujaCategory,
      date: t.huaweiS3AbujaDate,
      photos: [
        { src: E('huawei-ideahub-s3-launch-abuja.jpg'), caption: t.huaweiS3AbujaName }
      ],
      featured: true,
      desc: t.huaweiS3AbujaDesc,
    },
    {
      id: 'yealink-event',
      name: t.yealinkEventName,
      venue: t.yealinkEventVenue,
      year: '2025',
      category: t.yealinkEventCategory,
      photos: [
        { src: E('yealink-event-group.jpg'), caption: t.yealinkEventName }
      ],
      featured: true,
      desc: t.yealinkEventDesc,
    },
  ]
}

export const PLACEHOLDER = '/events/thankyouimage2.jpg.jpg'
