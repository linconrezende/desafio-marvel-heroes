import Character from '@/components/Character.vue'
import Vuetify from 'vuetify'

import { createLocalVue, mount } from '@vue/test-utils'

describe('Character.vue', () => {
  const localVue = createLocalVue()
  let _char = {
    id: 1011138,
    name: 'Beyonder',
    description: '',
    modified: '2013-11-20T17:06:32-0500',
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/7/10/528d31df87c49',
      extension: 'jpg'
    },
    resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011138',
    comics: {
      available: 15,
      collectionURI:
        'http://gateway.marvel.com/v1/public/characters/1011138/comics',
      items: [
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/7132',
          name: 'Avengers (1963) #261'
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/7136',
          name: 'Avengers (1963) #265'
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/6040',
          name: 'Beyond! (Hardcover)'
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/5056',
          name: 'Beyond! (2006) #3'
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/20158',
          name: 'Doctor Strange (1974) #74'
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/10374',
          name: 'New Mutants (1983) #37'
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/71530',
          name: 'Power Man and Iron Fist (1978) #121'
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/10580',
          name: 'Secret Wars (1984) #1'
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/18887',
          name: 'Secret Wars II (1985) #4'
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/18888',
          name: 'Secret Wars II (1985) #5'
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/18889',
          name: 'Secret Wars II (1985) #6'
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/18890',
          name: 'Secret Wars II (1985) #7'
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/18891',
          name: 'Secret Wars II (1985) #8'
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/18892',
          name: 'Secret Wars II (1985) #9'
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/41161',
          name: 'Shame Itself (2011) #1'
        }
      ],
      returned: 15
    },
    series: {
      available: 9,
      collectionURI:
        'http://gateway.marvel.com/v1/public/characters/1011138/series',
      items: [
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/1991',
          name: 'Avengers (1963 - 1996)'
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/1928',
          name: 'Beyond! (2007)'
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/997',
          name: 'Beyond! (2006)'
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/3740',
          name: 'Doctor Strange (1974 - 1988)'
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/2055',
          name: 'New Mutants (1983 - 1991)'
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/20674',
          name: 'Power Man and Iron Fist (1978 - 1986)'
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/2063',
          name: 'Secret Wars (1984 - 1985)'
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/3694',
          name: 'Secret Wars II (1985)'
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/15295',
          name: 'Shame Itself (2011)'
        }
      ],
      returned: 9
    },
    stories: {
      available: 14,
      collectionURI:
        'http://gateway.marvel.com/v1/public/characters/1011138/stories',
      items: [
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/5625',
          name: 'BEYOND! (2006) #3',
          type: 'cover'
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/14803',
          name: 'Avengers (1963) #261',
          type: 'cover'
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/14811',
          name: 'Avengers (1963) #265',
          type: 'cover'
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/21450',
          name: 'If I Should Die',
          type: 'interiorStory'
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/21588',
          name: 'Cover #21588',
          type: 'cover'
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/43178',
          name: 'Cover #43178',
          type: 'cover'
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/67989',
          name: 'Secret Wars II 4 cover',
          type: 'cover'
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/67990',
          name: 'Secret Wars II 5 cover',
          type: 'cover'
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/67991',
          name: 'Secret Wars II 6 cover',
          type: 'cover'
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/67992',
          name: 'Secret Wars II 7 cover',
          type: 'cover'
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/67993',
          name: 'Secret Wars II 8 cover',
          type: 'cover'
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/67994',
          name: 'Secret Wars II 9 cover',
          type: 'cover'
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/93178',
          name: 'Interior #93178',
          type: 'interiorStory'
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/159036',
          name: 'cover from Power Man and Iron Fist (2018) #121',
          type: 'cover'
        }
      ],
      returned: 14
    },
    events: {
      available: 2,
      collectionURI:
        'http://gateway.marvel.com/v1/public/characters/1011138/events',
      items: [
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/events/270',
          name: 'Secret Wars'
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/events/271',
          name: 'Secret Wars II'
        }
      ],
      returned: 2
    },
    urls: [
      {
        type: 'detail',
        url:
          'http://marvel.com/comics/characters/1011138/beyonder?utm_campaign=apiRef&utm_source=b9ae439c9d45cf1afb15bdcf4558d5a4'
      },
      {
        type: 'wiki',
        url:
          'http://marvel.com/universe/Maker?utm_campaign=apiRef&utm_source=b9ae439c9d45cf1afb15bdcf4558d5a4'
      },
      {
        type: 'comiclink',
        url:
          'http://marvel.com/comics/characters/1011138/beyonder?utm_campaign=apiRef&utm_source=b9ae439c9d45cf1afb15bdcf4558d5a4'
      }
    ]
  }
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it('renders props.msg when passed', () => {
    const wrapper = mount(Character, {
      localVue,
      vuetify,
      propsData: {
        character: _char
      }
    })
    expect(wrapper.find('#character-characterName').text()).toBe(_char.name)
  })
})
