module.exports = {
    module: {
      rules: [
        {
          test: /\.txt$/i,
          use: 'raw-loader',
        },
        {
          test: /\.ts$/i,
          use: 'raw-loader',
        },
        {
          test: /\.html$/i,
          use: 'raw-loader',
        },
        {
          test: /\.css$/i,
          use: 'raw-loader',
        },
      ],
    },
  };
