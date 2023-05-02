import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Button, Section, Text, Structure, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import { DiBootstrap, DiBingSmall, DiCssTricks, DiEnvato, DiGithubBadge } from "react-icons/di";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
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
				href="/"
				position="relative"
				border-color="rgba(0, 0, 238, 0)"
				max-width="fit-content"
			>
				<Image src="https://uploads.quarkly.io/64501beea4bc040020a0a4b9/images/1.png?v=2023-05-01T21:18:21.068Z" width="120px" z-index="3" />
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
					Home
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
					href="#"
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
				xl-align-self="center"
				xl-order="0"
			/>
			<Structure width="100%" md-flex="1 1 0%" md-align-self="auto">
				<Override
					slot="Content"
					md-justify-items="start"
					md-align-items="end"
					md-display="flex"
					sm-display="flex"
				>
					<Override slot="cell-0">
						<Text margin="16px 0px 16px 0px" font="600 58px/84px sans-serif" width="416px" text-align="left">
							Let's Find A Solution To Your Problem
						</Text>
						<Text margin="16px 0px 16px 0px" text-align="left" color="#6F7275" font="400 18px/32px --fontFamily-googlePoppins">
							Are there problems? Let's talk with us, our psychologists are experienced in dealing with problems
						</Text>
						<Button
							font="normal 00 16px/1.5 --fontFamily-googlePoppins"
							color="#ffffff"
							background="#8A49FF"
							border-radius="41px"
							align-self="flex-start"
							margin="16px 0px 16px 0px"
						>
							Start Consultation
						</Button>
					</Override>
					<Override slot="cell-1">
						<Image
							src="https://uploads.quarkly.io/64501beea4bc040020a0a4b9/images/hero.svg?v=2023-05-02T04:39:03.428Z"
							display="flex"
							max-width="80%"
							align-items="center"
							justify-content="center"
							xl-position="relative"
							xl-z-index="-1"
							xl-max-width="100%"
						/>
					</Override>
					<Override
						slot="Cell 0th"
						align-self="center"
						justify-self="start"
						display="flex"
						min-width="100%"
						align-items="center"
						flex-direction="column"
						xl-width="auto"
						md-display="block"
						md-min-width="inherit"
					/>
					<Override slot="cell-2">
						<Box
							min-width="100%"
							min-height="100px"
							display="flex"
							background="rgba(255, 0, 0, 0)"
							border-radius="104px"
							width="fit-content"
							lg-background="rgba(255, 0, 0, 0)"
							lg-hover-box-shadow="--l"
							xl-flex="0 0 auto"
							xl-margin="5px 5px 5px 5px"
							margin="5px 5px 5px 5px"
							xl-display="flex"
							xl-min-height="20%"
							xl-height="80px9"
							xl-background="rgba(255, 0, 0, 0)"
							md-display="none"
							hover-box-shadow="--l"
							transition="all 0.4s ease-in-out 0.1s"
							hover-transition="all 0.4s ease-in-out 0.1s"
						>
							<Box
								min-width="100px"
								min-height="100px"
								display="flex"
								align-self="center"
								align-items="center"
								justify-content="center"
							>
								<Image src="https://uploads.quarkly.io/64501beea4bc040020a0a4b9/images/Icon.svg?v=2023-05-02T06:01:42.282Z" display="block" />
							</Box>
							<Box
								min-width="100px"
								min-height="100px"
								align-self="auto"
								display="flex"
								align-items="center"
							>
								<Text
									margin="0px 0px 0px 0px"
									color="#6F7275"
									font="20px --fontFamily-googlePoppins"
									display="flex"
									align-items="center"
									justify-content="center"
								>
									Professional Psychologist
								</Text>
							</Box>
						</Box>
						<Box
							min-width="100%"
							min-height="100px"
							display="flex"
							background="rgba(255, 0, 0, 0)"
							border-radius="104px"
							width="fit-content"
							lg-background="rgba(255, 0, 0, 0)"
							lg-hover-box-shadow="--l"
							xl-padding="5p 0px 0px 0px"
							xl-margin="5px 5px 5px 5px"
							margin="5px 5px 5px 5px"
							xl-display="flex"
							xl-min-height="20%"
							xl-height="80px9"
							xl-background="rgba(255, 0, 0, 0)"
							md-display="none"
							hover-box-shadow="--l"
							transition="all 0.4s ease-in-out 0.1s"
							hover-transition="all 0.4s ease-in-out 0.1s"
						>
							<Box
								min-width="100px"
								min-height="100px"
								display="flex"
								align-self="center"
								align-items="center"
								justify-content="center"
							>
								<Image src="https://uploads.quarkly.io/64501beea4bc040020a0a4b9/images/Icon2.svg?v=2023-05-02T08:02:34.742Z" display="block" />
							</Box>
							<Box
								min-width="100px"
								min-height="100px"
								align-self="auto"
								display="flex"
								align-items="center"
							>
								<Text
									margin="0px 0px 0px 0px"
									color="#6F7275"
									font="20px --fontFamily-googlePoppins"
									display="flex"
									align-items="center"
									justify-content="center"
								>
									Strategic Facilities
								</Text>
							</Box>
						</Box>
						<Box
							min-width="100%"
							min-height="100px"
							display="flex"
							background="rgba(255, 0, 0, 0)"
							border-radius="104px"
							width="fit-content"
							lg-background="rgba(255, 0, 0, 0)"
							lg-hover-box-shadow="--l"
							xl-padding="5p 0px 0px 0px"
							xl-margin="5px 5px 5px 5px"
							margin="5px 5px 5px 5px"
							xl-display="flex"
							xl-min-height="20%"
							xl-height="80px9"
							xl-background="rgba(255, 0, 0, 0)"
							md-display="none"
							hover-box-shadow="--l"
							transition="all 0.4s ease-in-out 0.1s"
							hover-transition="all 0.4s ease-in-out 0.1s"
						>
							<Box
								min-width="100px"
								min-height="100px"
								display="flex"
								align-self="center"
								align-items="center"
								justify-content="center"
							>
								<Image src="https://uploads.quarkly.io/64501beea4bc040020a0a4b9/images/3.svg?v=2023-05-02T08:02:18.934Z" display="block" />
							</Box>
							<Box
								min-width="100px"
								min-height="100px"
								align-self="auto"
								display="flex"
								align-items="center"
							>
								<Text
									margin="0px 0px 0px 0px"
									color="#6F7275"
									font="20px --fontFamily-googlePoppins"
									display="flex"
									align-items="center"
									justify-content="center"
								>
									Gaming Therapy
								</Text>
							</Box>
						</Box>
						<Box
							min-width="100%"
							min-height="100px"
							display="flex"
							background="rgba(255, 0, 0, 0)"
							border-radius="104px"
							width="fit-content"
							lg-background="rgba(255, 0, 0, 0)"
							lg-hover-box-shadow="--l"
							xl-margin="5px 5px 5px 5px"
							margin="5px 5px 5px 5px"
							xl-display="flex"
							xl-min-height="20%"
							xl-height="80px9"
							xl-background="rgba(255, 0, 0, 0)"
							md-display="none"
							hover-box-shadow="--l"
							transition="all 0.4s ease-in-out 0.1s"
							hover-transition="all 0.4s ease-in-out 0.1s"
						>
							<Box
								min-width="100px"
								min-height="100px"
								display="flex"
								align-self="center"
								align-items="center"
								justify-content="center"
							>
								<Image src="https://uploads.quarkly.io/64501beea4bc040020a0a4b9/images/4.svg?v=2023-05-02T08:02:51.031Z" display="block" />
							</Box>
							<Box
								min-width="100px"
								min-height="100px"
								align-self="auto"
								display="flex"
								align-items="center"
							>
								<Text
									margin="0px 0px 0px 0px"
									color="#6F7275"
									font="20px --fontFamily-googlePoppins"
									display="flex"
									align-items="center"
									justify-content="center"
								>
									Online and Offline Counsult
								</Text>
							</Box>
						</Box>
					</Override>
					<Override slot="Cell 1" display="flex" align-items="center" justify-content="center" />
				</Override>
			</Structure>
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
				font="normal 400 20px/1.5 --fontFamily-googlePoppins"
				opacity="0.6"
				letter-spacing="1px"
				margin="16px 0px 16px 0px"
				lg-margin="0px 0px 6px 0px"
				quarkly-title="Title"
				color="#8a49ff"
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
			<Image src="https://uploads.quarkly.io/64501beea4bc040020a0a4b9/images/List.svg?v=2023-05-02T08:27:21.325Z" position="relative" width="150%" margin="16px 0px 16px 0px" />
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
						font="--base"
						letter-spacing="1px"
						quarkly-title="Title"
						margin="0px 0px 10px 0px"
						color="--dark"
						opacity="0.6"
						lg-text-align="center"
						lg-margin="0px 0px 6px 0px"
						text-transform="uppercase"
					>
						Team
					</Text>
					<Text
						md-font="--headline3"
						font="--headline2"
						margin="0px 0px 28px 0px"
						color="--dark"
						lg-text-align="center"
						lg-margin="0px 0px 18px 0px"
						sm-font="--headline3"
					>
						Who We Are
					</Text>
					<Text
						lg-margin="0px 0px 18px 0px"
						sm-font="--base"
						font="--lead"
						margin="0px 0px 20px 0px"
						color="--darkL2"
						opacity="0.6"
						lg-text-align="left"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
					</Text>
					<Link
						href="/about"
						color="--light"
						padding="8px 18px 8px 18px"
						text-align="center"
						transition="transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s"
						text-decoration-line="initial"
						font="--base"
						letter-spacing="0.5px"
						margin="9px 0px 0px 0px"
						background="--color-primary"
						hover-transform="translateY(-4px)"
					>
						Read More
					</Link>
				</Box>
				<Box
					padding="0px 0px 60% 0px"
					height="0px"
					hover-background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-first.svg?v=2020-11-06T16:37:39.391Z) center center/110% no-repeat"
					transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
					md-order="-1"
					width="100%"
					background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-first.svg?v=2020-11-06T16:37:39.391Z) center center/100% no-repeat"
					margin="0px 0px 0px 0px"
					lg-order="-1"
				/>
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
				<Box
					margin="0px 0px 0px 0px"
					padding="0px 0px 60% 0px"
					height="0px"
					hover-background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-second.svg?v=2020-11-06T17:14:59.136Z) center center/110% no-repeat"
					transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
					width="100%"
					background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-second.svg?v=2020-11-06T17:14:59.136Z) center center/100% no-repeat"
				/>
				<Box
					display="flex"
					flex-direction="column"
					align-items="flex-start"
					min-width="100px"
					min-height="100px"
				>
					<Text
						lg-text-align="center"
						quarkly-title="Title"
						text-transform="uppercase"
						opacity="0.6"
						lg-margin="0px 0px 6px 0px"
						font="--base"
						margin="0px 0px 10px 0px"
						letter-spacing="1px"
						color="--dark"
					>
						expertise
					</Text>
					<Text
						font="--headline2"
						margin="0px 0px 28px 0px"
						color="--dark"
						lg-text-align="center"
						lg-margin="0px 0px 18px 0px"
						sm-font="--headline3"
						md-font="--headline3"
					>
						Why Choose Us
					</Text>
					<Text
						opacity="0.6"
						sm-text-align="left"
						lg-text-align="left"
						lg-margin="0px 0px 18px 0px"
						sm-font="--base"
						font="--lead"
						margin="0px 0px 20px 0px"
						color="--darkL2"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
					</Text>
					<Link
						color="--light"
						text-align="center"
						background="--color-primary"
						transition="transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s"
						hover-transform="translateY(-4px)"
						href="/team"
						text-decoration-line="initial"
						padding="8px 18px 8px 18px"
						font="--base"
						letter-spacing="0.5px"
						margin="9px 0px 0px 0px"
					>
						Read More
					</Link>
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
				color="--dark"
				text-align="center"
				text-transform="uppercase"
				lg-text-align="center"
				letter-spacing="1px"
				margin="0px 0px 10px 0px"
				opacity="0.6"
				lg-margin="0px 0px 6px 0px"
				quarkly-title="Title"
				font="--base"
			>
				what we create
			</Text>
			<Text
				text-align="center"
				lg-text-align="center"
				md-margin="0px 0px 36px 0px"
				sm-font="--headline3"
				md-font="--headline3"
				font="--headline2"
				margin="0px 0px 48px 0px"
				color="--dark"
			>
				Our Works
			</Text>
			<Box
				lg-grid-template-columns="repeat(2, 1fr)"
				md-grid-template-columns="1fr"
				width="100%"
				display="flex"
				grid-gap="32px"
				grid-template-columns="repeat(3, 1fr)"
				order="0"
			>
				<Box
					width="100%"
					background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-first.svg?v=2020-11-06T16:37:39.391Z) center center/100% no-repeat"
					padding="0px 0px 60% 0px"
					height="0px"
					hover-background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-first.svg?v=2020-11-06T16:37:39.391Z) center center/110% no-repeat"
					transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
				/>
				<Box
					width="100%"
					background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-second.svg?v=2020-11-06T17:14:59.136Z) center center/100% no-repeat"
					padding="0px 0px 60% 0px"
					height="0px"
					hover-background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-second.svg?v=2020-11-06T17:14:59.136Z) center center/110% no-repeat"
					transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
				/>
				<Box
					width="100%"
					background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-third.svg?v=2020-11-06T17:15:50.700Z) center center/100% no-repeat"
					padding="0px 0px 60% 0px"
					height="0px"
					hover-background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-third.svg?v=2020-11-06T17:15:50.700Z) center center/110% no-repeat"
					transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
				/>
				<Box
					height="0px"
					hover-background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-fourth.svg?v=2020-11-06T17:17:18.847Z) center center/110% no-repeat"
					transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
					width="100%"
					background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-fourth.svg?v=2020-11-06T17:17:18.847Z) center center/100% no-repeat"
					padding="0px 0px 60% 0px"
				/>
				<Box
					width="100%"
					background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-fifth.svg?v=2020-11-06T17:18:24.897Z) center center/100% no-repeat"
					padding="0px 0px 60% 0px"
					height="0px"
					hover-background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-fifth.svg?v=2020-11-06T17:18:24.897Z) center center/110% no-repeat"
					transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
				/>
				<Box
					transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
					width="100%"
					background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-sixth.svg?v=2020-11-06T17:19:03.657Z) center center/100% no-repeat"
					padding="0px 0px 60% 0px"
					height="0px"
					hover-background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-sixth.svg?v=2020-11-06T17:19:03.657Z) center center/110% no-repeat"
				/>
			</Box>
		</Section>
		<Section
			sm-padding="24px 0 24px 0"
			background="--color-lightD1"
			border-style="solid"
			box-sizing="border-box"
			justify-content="center"
			padding="90px 0px 100px 0px"
			border-color="--color-lightD2"
			border-width="1px 0px 1px 0px"
			lg-padding="50px 30px 50px 30px"
			quarkly-title="FAQ"
		>
			<Override
				slot="SectionContent"
				width="100%"
				min-width="auto"
				margin="0px 48px 0px 48px"
				md-margin="0px 16px 0px 16px"
				align-items="center"
			/>
			<Text
				font="--base"
				margin="0px 0px 10px 0px"
				text-transform="uppercase"
				lg-margin="0px 0px 6px 0px"
				quarkly-title="Title"
				letter-spacing="1px"
				color="--dark"
				opacity="0.6"
				text-align="center"
				lg-text-align="center"
			>
				We're here to help
			</Text>
			<Text
				sm-font="--headline3"
				md-font="--headline3"
				font="--headline2"
				margin="0px 0px 64px 0px"
				color="--dark"
				text-align="center"
				lg-text-align="center"
				lg-margin="0px 0px 36px 0px"
			>
				FAQ
			</Text>
			<Box
				width="100%"
				display="grid"
				grid-gap="32px"
				grid-template-columns="repeat(4, 1fr)"
				lg-grid-template-columns="repeat(2, 1fr)"
				md-grid-template-columns="1fr"
			>
				<Box>
					<Text
						text-align="center"
						md-text-align="left"
						font="--lead"
						margin="0px 0px 0px 0px"
						color="--dark"
					>
						Have any questions?
					</Text>
					<Text
						text-align="center"
						margin="16px 0px 0px 0px"
						md-text-align="left"
						sm-margin="8px 0px 0px 0px"
						font="--base"
						color="--darkL2"
						opacity="0.6"
						lg-text-align="center"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger.
					</Text>
				</Box>
				<Box>
					<Text
						margin="0px 0px 0px 0px"
						color="--dark"
						text-align="center"
						md-text-align="left"
						font="--lead"
					>
						Have any questions?
					</Text>
					<Text
						lg-text-align="center"
						text-align="center"
						margin="16px 0px 0px 0px"
						md-text-align="left"
						sm-margin="8px 0px 0px 0px"
						font="--base"
						color="--darkL2"
						opacity="0.6"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger.
					</Text>
				</Box>
				<Box>
					<Text
						color="--dark"
						text-align="center"
						md-text-align="left"
						font="--lead"
						margin="0px 0px 0px 0px"
					>
						Have any questions?
					</Text>
					<Text
						font="--base"
						color="--darkL2"
						opacity="0.6"
						lg-text-align="center"
						text-align="center"
						margin="16px 0px 0px 0px"
						md-text-align="left"
						sm-margin="8px 0px 0px 0px"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger.
					</Text>
				</Box>
				<Box>
					<Text
						font="--lead"
						margin="0px 0px 0px 0px"
						color="--dark"
						text-align="center"
						md-text-align="left"
					>
						Have any questions?
					</Text>
					<Text
						lg-text-align="center"
						text-align="center"
						margin="16px 0px 0px 0px"
						md-text-align="left"
						sm-margin="8px 0px 0px 0px"
						font="--base"
						color="--darkL2"
						opacity="0.6"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger.
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" quarkly-title="Customers" lg-padding="50px 0 50px 0" justify-content="center">
			<Override
				slot="SectionContent"
				min-width="auto"
				margin="0px 32px 0px 32px"
				align-items="center"
				width="100%"
				md-margin="0px 16px 0px 16px"
			/>
			<Text
				color="--dark"
				text-align="center"
				lg-margin="0px 0px 6px 0px"
				text-transform="uppercase"
				lg-text-align="center"
				quarkly-title="Title"
				font="--base"
				margin="0px 0px 10px 0px"
				letter-spacing="1px"
				opacity="0.6"
			>
				They trust us
			</Text>
			<Text
				text-align="center"
				lg-text-align="center"
				sm-margin="0px 0px 48px 0px"
				sm-font="--headline3"
				md-font="--headline3"
				font="--headline2"
				margin="0px 0px 64px 0px"
				color="--dark"
			>
				Our Customers
			</Text>
			<Box
				lg-grid-template-columns="repeat(6, 1fr)"
				sm-grid-template-columns="1fr"
				display="grid"
				width="100%"
				grid-gap="32px"
				grid-template-columns="repeat(5, 1fr)"
			>
				<Box
					sm-align-items="center"
					sm-margin="0px 0px 0px 20px"
					lg-grid-column="1 / span 2"
					sm-grid-column="auto / auto"
					sm-display="flex"
				>
					<Icon
						category="di"
						icon={DiBootstrap}
						margin="0px auto 0px auto"
						size="84px"
						lg-font="64px sans-serif"
						sm-margin="0px 13px 0px 0px"
						sm-font="48px sans-serif"
					/>
					<Text
						md-margin="16px 0px 0px 0px"
						sm-margin="0px 0px 0px 0px"
						font="--base"
						color="--darkL2"
						opacity="0.6"
						lg-text-align="center"
						text-align="center"
					>
						Company Name
					</Text>
				</Box>
				<Box
					sm-align-items="center"
					sm-margin="0px 0px 0px 20px"
					lg-grid-column="3 / span 2"
					sm-grid-column="auto / auto"
					sm-display="flex"
				>
					<Icon
						size="84px"
						lg-font="64px sans-serif"
						sm-margin="0px 13px 0px 0px"
						sm-font="48px sans-serif"
						category="di"
						icon={DiBingSmall}
						margin="0px auto 0px auto"
					/>
					<Text
						text-align="center"
						md-margin="16px 0px 0px 0px"
						sm-margin="0px 0px 0px 0px"
						font="--base"
						color="--darkL2"
						opacity="0.6"
						lg-text-align="center"
					>
						Company Name
					</Text>
				</Box>
				<Box
					lg-grid-column="5 / span 2"
					sm-grid-column="auto / auto"
					sm-display="flex"
					sm-align-items="center"
					sm-margin="0px 0px 0px 20px"
				>
					<Icon
						sm-font="48px sans-serif"
						category="di"
						icon={DiCssTricks}
						margin="0px auto 0px auto"
						size="84px"
						lg-font="64px sans-serif"
						sm-margin="0px 13px 0px 0px"
					/>
					<Text
						font="--base"
						color="--darkL2"
						opacity="0.6"
						lg-text-align="center"
						text-align="center"
						md-margin="16px 0px 0px 0px"
						sm-margin="0px 0px 0px 0px"
					>
						Company Name
					</Text>
				</Box>
				<Box
					lg-grid-column="2 / span 2"
					sm-grid-column="auto / auto"
					sm-display="flex"
					sm-align-items="center"
					sm-margin="0px 0px 0px 20px"
				>
					<Icon
						icon={DiEnvato}
						margin="0px auto 0px auto"
						size="84px"
						lg-font="64px sans-serif"
						sm-margin="0px 13px 0px 0px"
						sm-font="48px sans-serif"
						category="di"
					/>
					<Text
						color="--darkL2"
						opacity="0.6"
						lg-text-align="center"
						text-align="center"
						md-margin="16px 0px 0px 0px"
						sm-margin="0px 0px 0px 0px"
						font="--base"
					>
						Company Name
					</Text>
				</Box>
				<Box
					lg-grid-column="4 / span 2"
					sm-grid-column="auto / auto"
					sm-display="flex"
					sm-align-items="center"
					sm-margin="0px 0px 0px 20px"
				>
					<Icon
						lg-font="64px sans-serif"
						sm-margin="0px 13px 0px 0px"
						sm-font="48px sans-serif"
						category="di"
						icon={DiGithubBadge}
						margin="0px auto 0px auto"
						size="84px"
					/>
					<Text
						opacity="0.6"
						lg-text-align="center"
						text-align="center"
						md-margin="16px 0px 0px 0px"
						sm-margin="0px 0px 0px 0px"
						font="--base"
						color="--darkL2"
					>
						Company Name
					</Text>
				</Box>
			</Box>
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