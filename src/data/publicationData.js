export const publications = [
  {
    type: 'paper',
    value: 'mulo',
    date: { day: 0, month: 10, year: 2021 },
    dateDescription: 'October 2024',
    title:
      'Mul-O: Encouraging Olfactory Innovation in Various Scenarios Through a Task-Oriented Development Platform',
    abstract:
      'Olfactory interfaces are pivotal in HCI, yet their development is hindered by limited application scenarios, stifling the discovery of new research opportunities. This challenge primarily stems from existing design tools focusing predominantly on odor display devices and the creation of standalone olfactory experiences, rather than enabling rapid adaptation to various contexts and tasks. Addressing this, we introduce Mul-O, a novel task-oriented development platform crafted to aid semi-professionals in navigating the diverse requirements of potential application scenarios and effectively prototyping ideas. Mul-O facilitates the swift association and integration of olfactory experiences into functional designs, system integrations, and concept validations. Comprising a web UI for task-oriented development, an API server for seamless third-party integration, and wireless olfactory display hardware, Mul-O significantly enhances the ideation and prototyping process in multisensory tasks. This was verified by a 15-day workshop attended by 30 participants. The workshop produced seven innovative projects, underscoring Mul-O’s efficacy in fostering olfactory innovation.',
    authors: ['Peizhong Gao', 'Fan Liu', 'Di Wen', 'Yuze Gao', 'Linxin Zhang', 'Chikelei Wang', 'Qiwen Zhang', 'Yu Zhang', 'Shao-en Ma', 'Qi Lu', 'Haipeng Mi', 'Yingqing Xu'],
    book:
      "UIST '24: Proceedings of the 37th Annual ACM Symposium on User Interface Software and Technology",
    location: 'Pittsburgh, USA',
    link: 'https://dl.acm.org/doi/10.1145/3654777.3676387',
    download: '',
    relavance: [],
    tags: ['cs', 'hci', 'coding'],
  },
  {
    type: 'demo',
    value: 'atmospheror',
    date: { day: 0, month: 10, year: 2021 },
    dateDescription: 'April 2023',
    title:
      'Atmospheror: Towards an Olfactory Interactive System for Enhancing Social Presence and Interaction in Synchronous Online Classes',
    abstract:
      'Synchronous online classes have become increasingly common in recent years. However, students and instructors often face challenges when giving and receiving reactions and feedback. Existing solutions include audio and visual cues, which often act as distractions. A potential alternative is olfactory cues. This paper proposes Atmospheror, an interactive system that supports interaction and feedback between students and instructors through an ambient olfactory display. We performed a pilot study with two instructors and 13 students to evaluate the effectiveness of Atmospheror and its design and implementation, applying both quantitative and qualitative methods. Preliminary results indicate that Atmospheror can promote students’ concentration and increase interactivity in online classes. User interviews provided suggestions for future enhancements of the selection and treatment of odor, hardware implementation, and interface system mechanisms.',
    authors: ['Qi Lu', 'Yuewei Zhang', 'Yuxin Zhang', 'Shao-en Ma', 'Yunfan Zhang', 'Yuou Qin', 'Peizhong Gao', 'Qiwei Zhang', 'Yingqing Xu'],
    book:
      "CHI EA '23: Extended Abstracts of the 2023 CHI Conference on Human Factors in Computing Systems",
    location: 'Hamburg, Germany',
    link: 'https://dl.acm.org/doi/10.1145/3544549.3585832',
    relavance: [],
    tags: ['cs', 'hci', 'coding'],
  },
  {
    type: 'paper',
    value: 'spacialAwareness',
    date: { day: 0, month: 10, year: 2021 },
    dateDescription: 'October 2022',
    title:
      'Uncovering Visually Impaired Gamers’ Preferences for Spatial Awareness Tools Within Video Games',
    abstract:
      'Sighted players gain spatial awareness within video games through sight and spatial awareness tools (SATs) such as minimaps. Visually impaired players (VIPs), however, must often rely heavily on SATs to gain spatial awareness, especially in complex environments where using rich ambient sound design alone may be insufficient. Researchers have developed many SATs for facilitating spatial awareness within VIPs. Yet this abundance disguises a gap in our understanding about how exactly these approaches assist VIPs in gaining spatial awareness and what their relative merits and limitations are. To address this, we investigate four leading approaches to facilitating spatial awareness for VIPs within a 3D video game context. Our findings uncover new insights into SATs for VIPs within video games, including that VIPs value position and orientation information the most from an SAT; that none of the approaches we investigated convey position and orientation effectively; and that VIPs highly value the ability to customize SATs.',
    authors: ['Vishnu Nair', 'Shao-en Ma', 'Ricardo E. Gonzalez Penuela', 'Yicheng He', 'Karen Lin', 'Mason Hayes', 'Hannah Huddleston', 'Matthew Donnelly', 'Brian A. Smith'],
    book:
      "ASSETS '22: Proceedings of the 24th International ACM SIGACCESS Conference on Computers and Accessibility",
    location: 'Athens, Greece',
    link: 'https://dl.acm.org/doi/10.1145/3517428.3544802',
    download: '/files/Uncovering_Visually_Impaired_Gamers_Preferences_for_Spatial.pdf',
    relavance: [],
    tags: ['cs', 'hci', 'coding'],
  },
  {
    type: 'demo',
    value: 'acousticMinimap',
    date: { day: 0, month: 10, year: 2021 },
    dateDescription: 'October 2021',
    title:
      'Towards a Generalized Acoustic Minimap for Visually Impaired Gamers',
    abstract:
      'Video games created for visually impaired players (VIPs) remain inequivalent to those created for sighted players. Sighted players use minimaps within games to learn how their surrounding environment is laid out, but there is no effective analogue to the minimap for visually impaired players. A major accessibility challenge is to create a generalized, acoustic (non-visual) version of the minimap for VIPs. To address this challenge, we develop and investigate four acoustic minimap techniques which represent a breadth of ideas for how an acoustic minimap might work: a companion smartphone app, echolocation, a directional scanner, and a simple menu. Each technique is designed to communicate information about the area around the player within a game world, providing functionality analogous to a visual minimap but in acoustic form. We close by describing a user study that we are performing with these techniques to investigate the factors that are important in the design of acoustic minimap tools.',
    authors: ['Vishnu Nair', 'Shao-en Ma', 'Hannah Huddleston', 'Karen Lin', 'Mason Hayes', 'Matthew Donnelly', 'Ricardo Gonzalez', 'Yicheng He', 'Brian A. Smith'],
    book:
      "UIST '21: The 34th Annual ACM Symposium on User Interface Software and Technology",
    location: 'Virtual',
    link: 'https://dl.acm.org/doi/10.1145/3474349.3480177',
    download: '/files/Towards_a_Generalized_Acoustic_Minimap_for_Visually_Impaired_Gamers.pdf',
    relavance: [],
    tags: ['cs', 'hci', 'coding'],
  },
  {
    type: 'paper',
    value: 'irelics',
    date: { day: 17, month: 3, year: 2019 },
    dateDescription: 'March 2019',
    title:
      'IRelics: Designing a Tangible Interaction Platform for the Popularization of Field Archaeology',
    abstract:
      'We present IRelics, a tangible interaction platform for the popularization of field archeology. IRelics allows users to experience archaeological field work activities as a serious game by using a set of tangible tools. We developed an innovative LWIR (Long Wavelength Infrared Rays) sensing system, which implements the design of tangible tools that provide real manipulation experiences. By interacting with IRelics, a player may experience different archaeological activities such as excavation and cleaning. We conducted two observations to evaluate the usability and effectiveness at archeology popularizing. Findings suggest that the IRelics platform can enhance the engagement of the participants by providing a positive and interactive environment while teaching them unfamiliar knowledge.',
    authors: ['Qi Lu', 'Shao-en Ma', 'Jiayin Li', 'Haipeng Mi', 'Yingqing Xu'],
    book:
      "TEI '19: Proceedings of the Thirteenth International Conference on Tangible, Embedded, and Embodied Interaction",
    location: 'Tempe, Arizona, USA',
    link: 'https://dl.acm.org/doi/10.1145/3294109.3295647',
    download:
      '/files/IRELICS_Designing_a_Tangible_Interaction_Platform_for_the_Popularization_of_Field_Archaeology.pdf',
    relavance: [],
    tags: ['cs', 'hci', 'ee', 'coding'],
  },
];
