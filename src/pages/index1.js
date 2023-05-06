import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Button, Section, Text, Strong } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index1"} />
		<Helmet>
			<title>
				Home | Website Example
			</title>
			<meta name={"description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:title"} content={"Home | Website Example"} />
			<meta property={"og:description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/website-example-quarkly.png?v=2020-11-05T19:48:01.806Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section padding="16px 0 16px 0" quarkly-title="Header" align-items="center" justify-content="center">
			<Override
				slot="SectionContent"
				md-margin="0px 16px 0px 16px"
				display="grid"
				grid-template-columns="repeat(3, 1fr)"
				md-grid-template-columns="repeat(2, 1fr)"
				margin="0px 32px 0px 32px"
				width="100%"
			/>
			<Link
				transition="opacity 200ms ease"
				quarkly-title="Link"
				href="/index"
				position="relative"
				border-color="rgba(0, 0, 238, 0)"
				max-width="fit-content"
			>
				<Image src="https://uploads.quarkly.io/64501beea4bc040020a0a4b9/images/Logo_1.png?v=2023-05-02T21:34:02.277Z" width="120px" z-index="3" />
			</Link>
			<Box
				min-width="fit-content"
				xl-align-self="center"
				xl-justify-self="center"
				xl-order="0"
				xl-display="flex"
				xl-align-items="center"
				xl-justify-content="center"
				xl-align-content="space-around"
				align-self="center"
				justify-self="end"
				order="1"
				display="flex"
				md-display="none"
			>
				<Link
					href="/index"
					color="#051B29"
					xl-padding="0px 16px 0px 16px"
					xl-text-decoration-line="initial"
					xl-min-width="max-content"
					xl-font="16px --fontFamily-googlePoppins"
					xl-color="#051B29"
					text-decoration-line="initial"
					font="400 14px/21px --fontFamily-googlePoppins"
					padding="0px 14px 0px 14px"
					min-width="fit-content"
				>
					Home
				</Link>
				<Link
					href="/index11"
					color="#051B29"
					xl-padding="0px 16px 0px 16px"
					xl-text-decoration-line="initial"
					xl-min-width="max-content"
					xl-font="16px --fontFamily-googlePoppins"
					xl-color="#051B29"
					text-decoration-line="initial"
					font="400 14px/21px --fontFamily-googlePoppins"
					padding="0px 14px 0px 14px"
					min-width="fit-content"
				>
					Service
				</Link>
				<Link
					href="#"
					color="#051B29"
					xl-padding="0px 16px 0px 16px"
					xl-text-decoration-line="initial"
					xl-min-width="max-content"
					xl-font="16px --fontFamily-googlePoppins"
					xl-color="#051B29"
					text-decoration-line="initial"
					font="400 14px/21px --fontFamily-googlePoppins"
					padding="0px 14px 0px 14px"
					min-width="fit-content"
				>
					Consultation
				</Link>
				<Link
					href="/index1"
					color="#051B29"
					xl-padding="0px 16px 0px 16px"
					xl-text-decoration-line="initial"
					xl-text-align="left"
					xl-min-width="max-content"
					xl-font="16px --fontFamily-googlePoppins"
					xl-color="#051B29"
					text-decoration-line="initial"
					font="400 14px/21px --fontFamily-googlePoppins"
					padding="0px 14px 0px 14px"
					min-width="fit-content"
				>
					About Us
				</Link>
				<Link
					href="#"
					color="#051B29"
					xl-padding="0px 16px 0px 16px"
					xl-text-decoration-line="initial"
					xl-min-width="max-content"
					xl-font="16px --fontFamily-googlePoppins"
					xl-color="#051B29"
					text-decoration-line="initial"
					font="400 14px/21px --fontFamily-googlePoppins"
					padding="0px 14px 0px 14px"
					min-width="fit-content"
				>
					Testimonials
				</Link>
				<Link
					href="#"
					color="#051B29"
					xl-padding="0px 16px 0px 16px"
					xl-text-decoration-line="initial"
					xl-min-width="max-content"
					xl-font="16px --fontFamily-googlePoppins"
					xl-color="#051B29"
					text-decoration-line="initial"
					font="400 14px/21px --fontFamily-googlePoppins"
					padding="0px 14px 0px 14px"
					min-width="fit-content"
				>
					Blog
				</Link>
			</Box>
			<Box justify-self="end" display="flex" align-self="center" order="1">
				<Button font="normal 400 16px/1.5 --fontFamily-googlePoppins" color="#ffffff" background="#8A49FF" border-radius="41px">
					Sign In
				</Button>
			</Box>
		</Section>
		<Section
			lg-padding="25px 0 25px 0"
			sm-padding="0px 0 25px 0"
			justify-content="center"
			padding="25px 0 75px 0"
			sm-align-items="center"
			sm-justify-content="center"
			quarkly-title="Hero"
		>
			<Override
				slot="SectionContent"
				md-margin="0px 16px 0px 16px"
				width="100%"
				height="620px"
				justify-content="center"
				sm-width="100%"
				min-width="100%"
				margin="0px 32px 0px 32px"
				align-items="center"
				lg-height="520px"
				md-height="420px"
				md-padding="0px 24px 0px 24px"
				xl-background="rgba(25, 28, 35, 0)"
				xl-display="grid"
			/>
			<Box min-width="100px" min-height="100px" xl-order="-1">
				<Image src="https://uploads.quarkly.io/64501beea4bc040020a0a4b9/images/hero_1.png?v=2023-05-06T17:43:06.841Z" display="block" />
			</Box>
			<Box min-width="100px" min-height="100px" xl-order="1" />
		</Section>
		<Section
			box-sizing="border-box"
			lg-padding="50px 30px 50px 30px"
			id="mission"
			padding="90px 0px 100px 0px"
			quarkly-title="About"
			border-color="--color-lightD2"
			border-style="solid"
			border-width="1px 0px 1px 0px"
			sm-padding="24px 0 24px 0"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				md-margin="0px 16px 0px 16px"
				align-items="center"
				width="100%"
				min-width="auto"
				margin="0px 32px 0px 32px"
			/>
			<Text
				text-align="center"
				font="--lead"
				opacity="0.6"
				letter-spacing="1px"
				margin="16px 0px 16px 0px"
				lg-margin="0px 0px 6px 0px"
				quarkly-title="Title"
				color="#5c00ff"
				lg-text-align="center"
				border-color="rgba(0, 0, 0, 0)"
			>
				Problem solving
			</Text>
			<Text
				letter-spacing="1px"
				color="#051B29"
				text-align="center"
				width="85%"
				lg-font="--lead"
				sm-font="--base"
				font="normal 600 40px/60px --fontFamily-googlePoppins"
				margin="16px 0px 16px 0px"
			>
				Have your tough conversations with us
			</Text>
			<Text
				letter-spacing="1px"
				color="#6F7275"
				text-align="center"
				width="85%"
				lg-font="--lead"
				sm-font="--base"
				font="normal 400 16px/28px --fontFamily-googlePoppins"
				margin="16px 0px 16px 0px"
			>
				Our doctors and specialists are experienced in understanding and supporting through tough situations
			</Text>
			<Image src="https://uploads.quarkly.io/64501beea4bc040020a0a4b9/images/List.svg?v=2023-05-02T21:34:02.275Z" position="relative" width="150%" margin="16px 0px 16px 0px" />
		</Section>
		<Section
			md-padding="25px 0px 25px 0px"
			justify-content="center"
			padding="70px 0 70px 0"
			quarkly-title="Info"
			lg-padding="50px 0px 50px 0px"
		>
			<Override
				slot="SectionContent"
				width="100%"
				min-width="auto"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
			/>
			<Box
				lg-grid-template-columns="1fr"
				display="grid"
				grid-template-columns="2fr 3fr"
				grid-gap="64px"
				xl-grid-gap="32px"
				md-grid-template-columns="1fr"
			>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
				>
					<Text
						font="1em --fontFamily-googlePoppins"
						letter-spacing="1px"
						quarkly-title="Title"
						margin="0px 0px 10px 0px"
						opacity="0.6"
						lg-text-align="center"
						lg-margin="0px 0px 6px 0px"
						border-color="rgba(0, 0, 0, 0)"
						color="#5600f9"
					>
						Offline Counselling{" "}
					</Text>
					<Text
						md-font="--headline3"
						font="normal normal 600 40px/60px --fontFamily-googlePoppins"
						margin="0px 0px 28px 0px"
						color="--dark"
						lg-text-align="center"
						lg-margin="0px 0px 18px 0px"
						sm-font="--headline3"
					>
						Counselling directly with a psychologist in our office
					</Text>
					<Text
						lg-margin="0px 0px 18px 0px"
						sm-font="--base"
						font="1em --fontFamily-googlePoppins"
						margin="0px 0px 20px 0px"
						color="--darkL2"
						opacity="0.6"
						lg-text-align="left"
					>
						The purpose of counseling services is to solve the problems experienced by clients. Efforts to alleviate this client problem can be in the form of reducing the intensity of the problem
					</Text>
					<Button
						font="normal 00 16px/1.5 --fontFamily-googlePoppins"
						color="#ffffff"
						background="#8A49FF"
						border-radius="41px"
						align-self="flex-start"
						margin="16px 0px 16px 0px"
					>
						Learn More
					</Button>
				</Box>
				<Image src="https://uploads.quarkly.io/64501beea4bc040020a0a4b9/images/img_4.svg?v=2023-05-02T21:34:02.266Z" display="block" />
			</Box>
			<Box
				md-margin="44px 0px 0px 0px"
				lg-grid-template-columns="1fr"
				display="grid"
				grid-template-columns="3fr 2fr"
				grid-gap="64px"
				margin="96px 0px 0px 0px"
				xl-grid-gap="32px"
				md-grid-template-columns="1fr"
				lg-margin="64px 0px 0px 0px"
			>
				<Image src="https://uploads.quarkly.io/64501beea4bc040020a0a4b9/images/img_1.svg?v=2023-05-02T21:34:02.269Z" display="block" />
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
				>
					<Text
						font="1em --fontFamily-googlePoppins"
						letter-spacing="1px"
						quarkly-title="Title"
						margin="0px 0px 10px 0px"
						opacity="0.6"
						lg-text-align="center"
						lg-margin="0px 0px 6px 0px"
						border-color="rgba(0, 0, 0, 0)"
						color="#5600f9"
					>
						Online Counselling{" "}
					</Text>
					<Text
						md-font="--headline3"
						font="normal normal 600 40px/60px --fontFamily-googlePoppins"
						margin="0px 0px 28px 0px"
						color="--dark"
						lg-text-align="center"
						lg-margin="0px 0px 18px 0px"
						sm-font="--headline3"
					>
						Counseling with a
						<br />
						psychologist anytime
						<br />
						and anywhere
					</Text>
					<Text
						lg-margin="0px 0px 18px 0px"
						sm-font="--base"
						font="1em --fontFamily-googlePoppins"
						margin="0px 0px 20px 0px"
						color="--darkL2"
						opacity="0.6"
						lg-text-align="left"
					>
						The purpose of counseling services is to solve the problems experienced by clients. Efforts to alleviate this client problem can be in the form of reducing the intensity of the problem
					</Text>
					<Button
						font="normal 00 16px/1.5 --fontFamily-googlePoppins"
						color="#ffffff"
						background="#8A49FF"
						border-radius="41px"
						align-self="flex-start"
						margin="16px 0px 16px 0px"
					>
						Learn More
					</Button>
				</Box>
			</Box>
		</Section>
		<Section
			padding="100px 0px 100px 0px"
			quarkly-title="Works"
			box-sizing="border-box"
			lg-padding="50px 30px 50px 30px"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				width="100%"
				min-width="auto"
				margin="0px 32px 0px 32px"
				md-margin="0px 0px 0px 0px"
				align-items="center"
			/>
			<Text
				font="1em --fontFamily-googlePoppins"
				letter-spacing="1px"
				quarkly-title="Title"
				margin="0px 0px 10px 0px"
				opacity="0.6"
				lg-text-align="center"
				lg-margin="0px 0px 6px 0px"
				border-color="rgba(0, 0, 0, 0)"
				color="#5600f9"
			>
				Psychologist
			</Text>
			<Text
				md-font="--headline3"
				font="normal normal 600 40px/60px --fontFamily-googlePoppins"
				margin="0px 0px 28px 0px"
				color="--dark"
				lg-text-align="center"
				lg-margin="0px 0px 18px 0px"
				sm-font="--headline3"
			>
				Meet our team!
			</Text>
			<Text
				lg-margin="0px 0px 18px 0px"
				sm-font="--base"
				font="1em --fontFamily-googlePoppins"
				margin="0px 0px 20px 0px"
				color="--darkL2"
				opacity="0.6"
				lg-text-align="left"
			>
				Members you can count on.
			</Text>
			<Box
				lg-grid-template-columns="repeat(2, 1fr)"
				md-grid-template-columns="1fr"
				grid-gap={0}
				grid-template-columns="repeat(auto-fit, 100px)minmax(100px, 1fr)repeat(auto-fit, 100px)fit-content(100px)repeat(3, 1fr)"
				align-items="flex-start"
				justify-content="center"
				display="flex"
				flex-direction="row"
				max-height="fit-content"
			>
				<Box
					display="block"
					flex="0 1 auto"
					flex-direction="row"
					order="-1"
					align-self="auto"
					background="rgba(0, 0, 0, 0)"
					padding="0px 5px 0px 5px"
					hover-transition="transform 0s ease 0s"
					hover-transform="translateY(0px)"
				>
					<Image src="https://uploads.quarkly.io/64501beea4bc040020a0a4b9/images/mem_1.svg?v=2023-05-02T21:34:02.267Z" display="grid" align-items="stretch" justify-content="center" />
				</Box>
				<Box
					display="block"
					align-self="auto"
					padding="0px 5px 0px 5px"
					hover-transition="transform 0s ease 0s"
					hover-transform="translateY(0px)"
				>
					<Image src="https://uploads.quarkly.io/64501beea4bc040020a0a4b9/images/mem_2.svg?v=2023-05-02T21:34:02.277Z" display="flex" align-items="stretch" justify-content="center" />
				</Box>
				<Box
					display="block"
					align-self="auto"
					flex="0 0 auto"
					padding="0px 5px 0px 5px"
					hover-transition="transform 0s ease 0s"
					hover-transform="translateY(0px)"
				>
					<Image src="https://uploads.quarkly.io/64501beea4bc040020a0a4b9/images/mem_3.svg?v=2023-05-02T21:34:02.260Z" display="flex" align-items="stretch" justify-content="center" />
				</Box>
				<Box
					display="block"
					align-self="auto"
					flex="0 0 auto"
					padding="0px 5px 0px 5px"
					hover-transition="transform 0s ease 0s"
					hover-transform="translateY(0px)"
				>
					<Image src="https://uploads.quarkly.io/64501beea4bc040020a0a4b9/images/mem_4.svg?v=2023-05-02T21:34:02.263Z" display="flex" align-items="stretch" justify-content="center" />
				</Box>
				<Box
					display="block"
					align-self="auto"
					flex="0 0 auto"
					padding="0px 5px 0px 5px"
					hover-transition="transform 0s ease 0s"
					hover-transform="translateY(0px)"
				>
					<Image src="https://uploads.quarkly.io/64501beea4bc040020a0a4b9/images/mem_5.svg?v=2023-05-02T21:34:02.251Z" display="flex" align-items="stretch" justify-content="center" />
				</Box>
			</Box>
		</Section>
		<Section
			sm-padding="24px 0 24px 0"
			box-sizing="border-box"
			justify-content="center"
			padding="90px 0px 100px 0px"
			border-color="rgba(0, 0, 0, 0)"
			lg-padding="50px 30px 50px 30px"
			quarkly-title="Testimonials"
			display="flex"
		>
			<Override
				slot="SectionContent"
				min-width="auto"
				margin="0px 48px 0px 48px"
				md-margin="0px 16px 0px 16px"
				align-items="center"
				display="flex"
				align-self="flex-start"
				flex="0 1 auto"
				justify-content="center"
				flex-direction="row"
			/>
			<Box
				min-width="100px"
				min-height="100px"
				display="block"
				order="-1"
				flex="1 1 0%"
			>
				<Text
					font="500 20px/30px --fontFamily-googlePoppins"
					letter-spacing="0.0037em"
					quarkly-title="Title"
					margin="0px 0px 10px 0px"
					opacity="0.6"
					lg-text-align="center"
					lg-margin="0px 0px 6px 0px"
					border-color="rgba(0, 0, 0, 0)"
					color="#5600f9"
					text-align="left"
					align-self="flex-start"
					display="flex"
				>
					Testimonials{" "}
				</Text>
				<Text
					md-font="--headline3"
					font="normal normal 600 40px/60px --fontFamily-googlePoppins"
					margin="0px 0px 28px 0px"
					color="--dark"
					lg-text-align="center"
					lg-margin="0px 0px 18px 0px"
					sm-font="--headline3"
					text-align="left"
					align-self="flex-start"
					display="flex"
				>
					Speakers stories
				</Text>
				<Text
					lg-margin="0px 0px 18px 0px"
					sm-font="--base"
					font="1em --fontFamily-googlePoppins"
					color="--darkL2"
					opacity="0.6"
					lg-text-align="left"
					text-align="left"
					align-self="flex-start"
					display="flex"
					padding="0px 10px 0px 10px"
				>
					It's not easy to tell a very personal problem, but these strong people managed to overcome their fears
				</Text>
			</Box>
			<Box
				min-width="100px"
				min-height="100px"
				display="block"
				align-self="baseline"
				order="1"
				background="#EEE4FF"
				padding="10px 10px 10px 10px"
				border-radius="100px"
				margin="0px 10px 0px 10px"
			>
				<Image src="https://uploads.quarkly.io/64501beea4bc040020a0a4b9/images/img_3.svg?v=2023-05-02T21:34:02.254Z" display="block" padding="5px 5px 5px 5px" />
			</Box>
			<Box
				min-width="100px"
				min-height="100px"
				display="flex"
				align-items="center"
				flex="1 1 0%"
				background="#EEE4FF"
				border-radius="142px"
			>
				<Image
					src="https://uploads.quarkly.io/64501beea4bc040020a0a4b9/images/img_2.svg?v=2023-05-02T21:34:02.254Z"
					display="block"
					flex="0 0 auto"
					max-width="40%"
					max-height="40%"
					padding="20px 20px 20px 20px"
				/>
				<Text margin="0px 0px 0px 0px" font="16px --fontFamily-googlePoppins">
					" I had someone I could talk to, It helped open my mind to such welcoming and understanding people. " -Marie
				</Text>
			</Box>
		</Section>
		<Section
			sm-padding="24px 0 24px 0"
			box-sizing="border-box"
			justify-content="center"
			padding="90px 0px 100px 0px"
			border-color="rgba(0, 0, 0, 0)"
			lg-padding="50px 30px 50px 30px"
			display="flex"
			quarkly-title="Banner"
		>
			<Override
				slot="SectionContent"
				min-width="auto"
				margin="0px 48px 0px 48px"
				md-margin="0px 16px 0px 16px"
				align-items="center"
				display="grid"
				align-self="flex-start"
				flex="0 1 auto"
				justify-content="center"
				flex-direction="row"
			/>
			<Image
				src="https://uploads.quarkly.io/64501beea4bc040020a0a4b9/images/Vector%207.svg?v=2023-05-06T17:34:17.820Z"
				display="block"
				position="absolute"
				left="auto"
				right="-7px"
				width="515.3653928571429px"
				bottom="8px"
				height="911.9776785714286px"
				top="auto"
				z-index="-1"
			/>
			<Box min-width="100px" min-height="100px" align-self="center" justify-self="center">
				<Image src="https://uploads.quarkly.io/64501beea4bc040020a0a4b9/images/Logo_3.png?v=2023-05-06T17:25:55.377Z" display="block" />
			</Box>
			<Box min-width="100px" min-height="100px">
				<Text
					md-font="--headline3"
					font="normal normal 600 40px/60px --fontFamily-googlePoppins"
					margin="0px 0px 28px 0px"
					color="--dark"
					lg-text-align="center"
					lg-margin="0px 0px 18px 0px"
					sm-font="--headline3"
					text-align="left"
					align-self="flex-start"
					display="flex"
				>
					Let's Find A Solution To Your Problem
				</Text>
			</Box>
			<Box min-width="100px" min-height="100px" text-align="center">
				<Button
					font="normal 00 16px/1.5 --fontFamily-googlePoppins"
					color="#ffffff"
					background="#8A49FF"
					border-radius="41px"
					align-self="flex-start"
					margin="16px 0px 16px 0px"
				>
					Learn More
				</Button>
			</Box>
			<Image
				src="https://uploads.quarkly.io/64501beea4bc040020a0a4b9/images/Vector%209.svg?v=2023-05-06T17:28:22.912Z"
				display="block"
				position="absolute"
				left="-1px"
				bottom="335px"
			/>
		</Section>
		<Section
			padding="80px 0 80px 0"
			quarkly-title="Footer"
			lg-padding="50px 0 50px 0"
			display="flex"
			flex-direction="column"
			align-items="center"
			background="#EEE4FF"
		>
			<Override
				slot="SectionContent"
				min-width="auto"
				margin="0px 32px 0px 32px"
				align-items="center"
				width="100%"
				md-margin="0px 16px 0px 16px"
				display="flex"
				align-self="auto"
				justify-content="center"
				flex-direction="row"
			/>
			<Box
				min-width="100px"
				min-height="100px"
				display="block"
				order="-1"
				flex="1 1 0%"
				padding="0px 16px 0px 16px"
				align-self="flex-start"
			>
				<Image src="https://uploads.quarkly.io/64501beea4bc040020a0a4b9/images/Logo_2.png?v=2023-05-02T21:34:02.273Z" display="block" max-width="15%" />
				<Text margin="0px 0px 0px 0px" font="normal 400 18px/32px --fontFamily-googlePoppins">
					Lets us connect you to a solution!
				</Text>
				<Text margin="0px 0px 0px 0px" font="normal 400 16px/28px --fontFamily-googlePoppins">
					©2023 Healing. All right reserved
				</Text>
			</Box>
			<Box min-width="100px" min-height="100px" padding="0px 16px 0px 16px" align-self="flex-start">
				<Text margin="10px 0px 10px 0px" font="normal 400 18px/32px --fontFamily-googlePoppins">
					<Strong>
						Company
					</Strong>
				</Text>
				<Text margin="10px 0px 10px 0px" font="normal 400 18px/32px --fontFamily-googlePoppins">
					About Us
				</Text>
				<Text margin="10px 0px 10px 0px" font="normal 400 18px/32px --fontFamily-googlePoppins">
					Product{" "}
				</Text>
				<Text margin="10px 0px 10px 0px" font="normal 400 18px/32px --fontFamily-googlePoppins">
					Testimonial
				</Text>
			</Box>
			<Box min-width="100px" min-height="100px" padding="0px 16px 0px 16px" align-self="flex-start">
				<Text margin="10px 0px 10px 0px" font="normal 400 18px/32px --fontFamily-googlePoppins">
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						Support
					</Strong>
				</Text>
				<Text margin="10px 0px 10px 0px" font="normal 400 18px/32px --fontFamily-googlePoppins">
					FAQ
				</Text>
				<Text margin="10px 0px 10px 0px" font="normal 400 18px/32px --fontFamily-googlePoppins">
					Privacy Policy{" "}
				</Text>
				<Text margin="10px 0px 10px 0px" font="normal 400 18px/32px --fontFamily-googlePoppins">
					Terms of Service
				</Text>
			</Box>
			<Box min-width="100px" min-height="100px" padding="0px 16px 0px 16px" align-self="flex-start">
				<Text margin="10px 0px 10px 0px" font="normal 400 18px/32px --fontFamily-googlePoppins">
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						Service
					</Strong>
				</Text>
				<Text margin="10px 0px 10px 0px" font="normal 400 18px/32px --fontFamily-googlePoppins">
					Online Consulting
				</Text>
				<Text margin="10px 0px 10px 0px" font="normal 400 18px/32px --fontFamily-googlePoppins">
					Offline Consulting
				</Text>
			</Box>
			<Box min-width="100px" min-height="100px" padding="0px 16px 0px 16px" />
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});