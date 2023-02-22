export default {
  name: 'functions',
  title: 'Functions',
  type: 'document',
  fields: [
    {
      name: 'section',
      title: 'Section',
      type: 'string'
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'heading',
    },
    {
      name: 'text',
      type: 'Text',
      type: 'text'
    },
    {
      name: 'options',
      title: 'Durtion Options',
      type: 'array',
      of: [{
        name: 'option',
        title: 'Option',
        type: 'object',
        fields: [
          {
            name: 'name',
            titke: 'Name',
            type: 'string'
          },
          {
            name: 'price',
            title: 'Price',
            type: 'number'
          },
          {
            name: 'description',
            title: 'Description',
            type: 'text',
          }
        ]
      }]
    },
    {
      name: 'features',
      title: 'Package Features',
      type: 'array',
      of: [{
        type: 'string'
      }]
    },
    {
      name: 'services',
      title: 'Extra Services',
      type: 'array',
      of: [{
        name: 'service',
        type: 'object',
        fields: [
          {
            name: 'name',
            title: 'Service Name',
            type: 'string'
          },
          {
            name: 'type',
            title: 'Service Type',
            type: 'string'
          },
          {
            name: 'description',
            title: 'Service Description',
            type: 'text'
          },
          {
            name: 'price',
            title: 'Service Price',
            type: 'string'
          }
        ]
      }]
    },
    {
      name: 'foodOptions',
      title: 'Food Options',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'type',
            title: 'Type',
            type: 'string'
          },
          {
            name: 'meat',
            title: 'Meat',
            type: 'string'
          },
          {
            name: 'price',
            title: 'Price',
            type: 'number'
          }
        ]
      }]
    },
    {
      name: 'spaces',
      title: 'Space Options',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'space',
            title: 'Space',
            type: 'string'
          },
          {
            name: 'price',
            title: 'Price',
            type: 'number'
          }
        ]
      }]
    }
  ]
}