import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default env => {
	const isDevMode = env.mode === "development";

	return {
		mode: isDevMode ? "development" : "production",
		entry: "./src/index.tsx",
		output: {
			path: path.resolve(__dirname, "dist"),
			filename: "[name]-[contenthash].js",
			hashDigestLength: 10,
			clean: true,
			publicPath: "/"
		},
		plugins: [].concat(
			new HtmlWebpackPlugin({
				title: "animan",
				template: "./index.html"
			}),
			isDevMode
				? []
				: new MiniCssExtractPlugin({
						filename: "styles/index-[contenthash].css"
				  })
		),
		module: {
			rules: [
				{
					test: /\.(png|svg|jpg|jpeg|gif)$/i,
					type: "asset/resource"
				},
				{
					test: /\.(woff|woff2|eot|ttf|otf)$/i,
					type: "asset/resource"
				},
				{
					test: /\.module\.s[ac]ss$/i,
					use: [
						isDevMode ? "style-loader" : MiniCssExtractPlugin.loader,
						{
							loader: "css-loader",
							options: {
								modules: {
									mode: "local",
									namedExport: false,
									exportLocalsConvention: "as-is",
									localIdentHashDigestLength: 10,
									localIdentName: `${
										isDevMode
											? "[path][name]__[local]"
											: "[local]__[hash:base64]"
									}`
								}
							}
						},
						"sass-loader"
					]
				},
				{
					test: /\.module\.css$/i,
					use: [
						isDevMode ? "style-loader" : MiniCssExtractPlugin.loader,
						{
							loader: "css-loader",
							options: {
								modules: {
									mode: "local",
									namedExport: false,
									exportLocalsConvention: "as-is",
									localIdentHashDigestLength: 10,
									localIdentName: `${
										isDevMode
											? "[path][name]__[local]"
											: "[local]__[hash:base64]"
									}`
								}
							}
						}
					]
				},
				{
					test: /\.css$/i,
					exclude: /\.module\.css$/i,
					use: [
						isDevMode ? "style-loader" : MiniCssExtractPlugin.loader,
						"css-loader"
					]
				},
				{
					test: /\.s[ac]ss$/i,
					exclude: /\.module\.s[ac]ss$/i,
					use: [
						isDevMode ? "style-loader" : MiniCssExtractPlugin.loader,
						"css-loader",
						"sass-loader"
					]
				},
				{
					test: /\.tsx?$/,
					use: "ts-loader",
					exclude: /node_modules/
				}
			]
		},
		resolve: {
			alias: {
				"@animman/tma/*": path.resolve(__dirname, "../../apps/tma/src/*"),
				"@animman/server/*": path.resolve(__dirname, "../../apps/server/src/*"),
				"@animman/bot/*": path.resolve(__dirname, "../../apps/bot/src/*"),
				"@animman/config/*": path.resolve(
					__dirname,
					"../../packages/config/src/*"
				),
				"@animman/shared/*": path.resolve(
					__dirname,
					"../../packages/shared/src/*"
				)
			},
			extensions: [".tsx", ".ts", ".js", "..."]
		},
		devtool: "inline-source-map",
		devServer: {
			static: "./dist",
			historyApiFallback: {
				index: "/index.html"
			}
		},
		stats: {
			errorDetails: true
		},
		optimization: {
			splitChunks: {
				chunks: "all"
			}
		}
	};
};
