export default {
  name: 'activity',
  title: 'Activity',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Activity Name',
      type: 'string'
    },
    {
      name: 'type',
      title: 'Activity Type',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Activity Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'info',
      title: 'Activity Information',
      type: 'object',
      fields: [
        {
          name: 'contact',
          title: 'Contact Number',
          type: 'string'
        },
        {
          name: 'address',
          title: 'Address',
          type: 'object',
          fields: [
            {
              name: 'address',
              title: 'Activity Address',
              type: 'string'
            },
            {
              name: 'link',
              title: 'Address link',
              type: 'string'
            }
          ]
        },
        {
          name: 'directions',
          tilte: 'Directions',
          type: 'string'
        }
      ]
    },
    {
      name: 'companyLink',
      title: 'Company Link',
      type: 'string'
    }
  ]
}