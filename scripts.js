var movies = [
	{
		id:1,
		title: 'Harry Potter',
		desc: 'film o czarodzieju',
		img: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjIyZGU4YzUtNDkzYi00ZDRhLTljYzctYTMxMDQ4M2E0Y2YxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UX182_CR0,0,182,268_AL_.jpg'
	},
	{
		id:2,
		title: 'Król Lew',
		desc: 'Film o królu sawanny',
		img: 'http://1.fwcdn.pl/po/68/78/6878/6927221.3.jpg'
	},
		{
		id:3,
		title: 'Gwiezdne Wojny',
		desc: 'Film o jasnej i ciemnej stronie mocy',
		img: 'https://vignette.wikia.nocookie.net/disney/images/8/8c/The_Last_Jedi_Theatrical_Poster.jpg/revision/latest?cb=20171010005712'
	},
		{
		id:4,
		title: 'Matrix',
		desc: 'Czy żyjemy w prawdzimy świecie?',
		img: 'https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-movie/the-matrix-poster.jpg?itok=yMnZ6Qag'
	}
];

var MovieList = React.createClass({
	propTypes: {
		movies: React.PropTypes.array.isRequired,
	},

	render: function () {
		return(
			React.createElement('div',{},
				React.createElement('h1',{},'Lista filmów'),
				React.createElement('ul', {},
					this.props.movies.map(function(movie) {
						return React.createElement(Movie, {key: movie.id, movie:movie},);
					})
				)
			)
		)
	},
});

var Movie = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired,
	},
	render: function () {
		return(
			React.createElement('li',{},
				React.createElement(MovieTitle, {title: this.props.movie.title}),
				React.createElement(MovieDescription, {desc: this.props.movie.desc}),
				// React.createElement(MoviePoster, {src: this.props.movie.src})
			)
		)
	},
});

var MovieTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired,
	},

	render: function () {
		return(
			React.createElement('h2',{}, this.props.title.title)
		)
	},
});

var MovieDescription = React.createClass({
	propTypes: {
		desc: React.PropTypes.string.isRequired,
	},

	render: function () {
		return(
			React.createElement('p',{}, this.props.desc.desc)
		)
	},
});

// var MoviePoster = React.createClass({
// 	propTypes: {
// 		src: React.PropTypes.string.isRequired,
// 	},

// 	render: function () {
// 		return(
// 			React.createElement('img', {src: this.props.src.img, width: 300, height: 500 },)
// 		)
// 	},
// });

var app = React.createElement(MovieList, {movies: movies});
ReactDOM.render(app , document.getElementById('app'));





// var GalleryItem = React.createClass({
// 	propTypes: {
// 		image: React.PropTypes.object.isRequired,
// 	},

	
// 	render: function() {
// 		return ( 
// 			React.createElement('div', {}, 
// 				React.createElement('h2', {}, this.props.image.name),
// 				React.createElement('img', {src: this.props.image.src})
// 			)
// 		)
// 	},
// });

// var image = {
// 	name: 'Kotek',
// 	src: 'http://imgur.com/n8OYCzR.png'
// };

// var element = React.createElement(GalleryItem, {image: image});
// ReactDOM.render(element, document.getElementById('app'));

