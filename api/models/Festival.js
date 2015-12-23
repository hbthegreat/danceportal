/**
* Festival.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name: {
        type: 'string',
        required: true
    },
    thumbnailImageUrl: {
      type: 'string'
    },
    viewers: {
      type: 'integer'
    },
    featured: {
      type: 'boolean'
    },
    uniqueUrl: {
      type: 'string',
      required: true
    }
  },
  seedData:[
    {
      name: 'Ultra 2015',
      thumbnailImageUrl: 'http://www.quickmeme.com/img/79/79d3e1a66f5ad3aff7d373d8781b14de71d444a8e30f2482e3c64b58282fbb63.jpg',
      uniqueUrl: 'ultra-2015',
      viewers: 5,
      featured: true
    },
    {
      name: 'Soundwave RIP',
      thumbnailImageUrl: 'http://d2ykiwzv4lwge4.cloudfront.net/wp-content/uploads/2014/08/31.jpg',
      uniqueUrl: 'soundwave-rip',
      viewers: 1500,
      featured: false
    },
    {
      name: 'Final Countdown',
      thumbnailImageUrl: 'http://media.tumblr.com/474686d9cbb9a05a4a2436b7e2cc3671/tumblr_inline_mt2ft2kWhH1qz4rgp.jpg',
      uniqueUrl: 'final-countdown',
      viewers: 152659,
      featured: true
    },{
      name: 'Not As Ultra 2017',
      thumbnailImageUrl: 'http://www.amerika.org/wp-content/uploads/triggered-300x262.png',
      uniqueUrl: 'not-as-ultra-2017',
      viewers: 5,
      featured: false
    },
    {
      name: 'Future Music Festival',
      thumbnailImageUrl: 'http://orig03.deviantart.net/e05b/f/2011/258/b/0/zecora__s_plot_by_kooner01-d49xfo9.png',
      viewers: 1500,
      uniqueUrl: 'future-music-festival',
      featured: false
    },
    {
      name: 'Local Highschool Dance',
      thumbnailImageUrl: 'http://www.amerika.org/wp-content/uploads/triggered-300x262.png',
      viewers: 1523525,
      uniqueUrl: 'local-highschool-dance',
      featured: true
    }
  ]
};
