/**
 * FestivalController
 *
 * @description :: Server-side logic for managing festivals
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	showMainFestivalPage: function (req, res)
	{
		return res.view('festivals/festival-main');
	},
	getFestivals: function (req, res)
	{
		Festival.find({}).exec(function findAll(err, festivals){
			if(err){
				return res.negotiate(err);
			}
			if(!festivals)
			{
				return res.notFound();
			}
			return res.json(festivals);
		});
	},
	getFeaturedFestivals: function(req, res)
	{
		Festival.find({featured:true}).exec(function findAll(err, festivals){
			if(err){
				return res.negotiate(err);
			}
			if(!festivals)
			{
				return res.notFound();
			}
			return res.json(festivals);
		});
	}
};
