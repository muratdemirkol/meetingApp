var webpack = require('webpack');

module.exports = {
  entry : './app/index.jsx',
          //'script!jquery/dist/jquery.min.js',
          //'script!react-bootstrap/dist/react-bootstrap.min.js',
          //'script!react-bootstrap-table/dist/react-bootstrap-table.min.js',
        //],

/*  externals:{
    jquery:'jQuery'
  },*/

/*  plugins: [
    new webpack.ProvidePlugin({
        '$': 'jquery',
        'jQuery': 'jquery'
    })
  ],*/

  output: {
    path: __dirname,
    filename:'./app/bundle.js'
  },
  resolve:{
    root:__dirname,
    alias: {
      MainTemplate : 'app/views/maintemplate/MainTemplate.jsx',
      Employee: 'app/views/employee/Employee.jsx',
      Department: 'app/views/department/Department.jsx',
      Header : 'app/views/header/Header.jsx',
      Meeting: 'app/views/meeting/Meeting.jsx'
    },
    extensions:['','.js','.jsx','.css']
  },
  module:{
    loaders: [
      {
        loader: 'babel-loader',
        query: { presets: ['react', 'es2015', 'stage-0'] },
        test: /\.jsx?$/, exclude: /(node_modules|bower_components)/
      },
      {
        loader: 'url-loader?limit=100000',
        test: /\.(png|woff|woff2|eot|ttf|svg)$/
      }
    ]
  }
};
