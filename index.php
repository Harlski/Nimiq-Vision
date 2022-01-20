<!DOCTYPE html>
<html> 
  <head>
    <title>Nimiq Vision</title> 
    <link rel="stylesheet" href="https://nimiq.github.io/nimiq-style/src/main.css">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Nimiq Style Overview</title>
    <link rel="icon" href="./favicon.ico">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Muli:400,600,700">
    <link rel="stylesheet" href="./src/main.css">
    <link rel="stylesheet" href="./nimiq-style.icons.svg">
    <link rel="stylesheet" href="./src/home.css">
	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-1RF3XNFTS8"></script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());

	  gtag('config', 'G-1RF3XNFTS8');
	</script>
    <style>
        /*! Hint.css - v2.5.1 - 2018-11-17
         * http://kushagragour.in/lab/hint/
         * Copyright (c) 2018 Kushagra Gour */

        /*-------------------------------------*\
            HINT.css - A CSS tooltip library
        \*-------------------------------------*/

        /**
         * HINT.css is a tooltip library made in pure CSS.
         *
         * Source: https://github.com/chinchang/hint.css
         * Demo: http://kushagragour.in/lab/hint/
         */

        /**
         * Adapted by Nimiq for simplicity
         */

        /**
          * Source is copied from https://nimiq.github.io/nimiq-style/demo.html
          * with some minor changes, developer of Nimiq.Vision is not good at web design :sweat:
          * Love the style, reach out at i@nimiq.vision if you're interested in helping improve
          * the layout of Nimiq.vision <3 
          */

        .hint {
            position: relative;
            display: inline-block; }
        .hint:before, .hint:after {
            position: absolute;
            visibility: hidden;
            opacity: 0;
            z-index: 1000000;
            pointer-events: none;
            bottom: 100%;
            left: 50%; }
        .hint:before {
            content: '';
            position: absolute;
            background: transparent;
            border: 6px solid transparent;
            z-index: 1000001;
            border-top-color: #383838;
            margin-bottom: -11px;
            left: calc(50% - 6px); }
        .hint:after {
            background: #383838;
            color: white;
            padding: 1rem 1.5rem;
            font-size: 2.25rem;
            font-weight: bold;
            line-height: 2.5rem;
            white-space: nowrap;
            border-radius: 4px;
            -webkit-transform: translateX(-50%);
            -moz-transform: translateX(-50%);
            transform: translateX(-50%);
            text-shadow: 0 -1px 0px black;
            box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3); }
        .hint:hover:before, .hint:hover:after {
            visibility: visible;
            opacity: 1; }
        .hint:hover:before {
            -webkit-transform: translateY(-8px);
            -moz-transform: translateY(-8px);
            transform: translateY(-8px); }
        .hint:hover:after {
            -webkit-transform: translateX(-50%) translateY(-8px);
            -moz-transform: translateX(-50%) translateY(-8px);
            transform: translateX(-50%) translateY(-8px); }
        .hint[aria-label]:after {
            content: attr(aria-label); }

        /* END of hint.css */ 
        span {
            padding-left: 10px;
        }        

        header {
            margin: auto;
            padding: 1px;
            position: relative;
            z-index: 999;
            max-width: 570px;
            border-radius: 8px;
            box-shadow: 0 0.5rem 3.5rem rgb(0 0 0 / 11%);
            text-align: center;
        }

        .content {
            width: 100%;
            max-width: 600px;
            margin: auto;
        }

        .links {
            text-align: center;
            margin-bottom: 5rem;
        }
        .rounded{
            border-radius: 8px;
        }

        .table-of-contents {
            font-size: 2.25rem;
        }

        .nq-card-header h1 a {
            position: relative;
        }

        .nq-card-header h1 a:hover::before {
            content: '#';
            position: absolute;
            left: -1em;
            opacity: 0.6;
        }

        #contents,
        #installation,
        #cards,
        #footer {
            padding: 2rem;
        }

        #footer {
            text-align: center;
            padding-bottom: 4rem !important;
        }

        #cards > .nq-card {
            margin: 10rem auto;
        }

        .code {
            white-space: pre;
            font-size: 1.75rem;
            line-height: 3rem;
            font-family: monospace;
            border: 1px solid var(--nimiq-card-border-color);
            border-radius: 0.5rem;
            padding: 3rem 4rem;
            background: ivory;
            color: dimgray;
            overflow: auto;
            border-top: solid 1px rgba(0, 0, 0, 0.06);
        }

        .code:not(:last-child) {
            border-bottom: solid 1px rgba(0, 0, 0, 0.06);
        }

        .nq-card .code {
            border-left: none;
            border-right: none;
            border-radius: 0;
        }

        .code + .code {
            border-top: none;
        }

        .code:last-child {
            border-bottom: none;
            border-bottom-left-radius: 1rem;
            border-bottom-right-radius: 1rem;
        }

        .text-colors {
            font-weight: bold;
        }

        .background-colors {
            overflow: auto;
        }

        .color-swatch {
            padding: 4rem 3rem;
            margin: 0 3rem 3rem 0;
            border-radius: 1rem;
            width: 28rem;
            float: left;
            font-weight: bold;
        }

        .rounded-padding {
            border-radius: 1rem;
            padding: 2rem;
        }

        #small-buttons .nq-button-s,
        #pill-buttons .nq-button-pill {
            margin-bottom: 0.75rem;
        }

        .nq-input-s {
            font-size: 2rem;
        }

        .icons {
            font-size: 5rem;
        }

        .icons .nq-icon {
            margin: 0.95rem;
        }

        .icons .nq-icon.ledger {
            width: 24rem;
        }

        .icons:last-child {
            border-bottom-left-radius: 1rem;
            border-bottom-right-radius: 1rem;
        }

        @media (max-width: 450px) {
            #contents,
            #installation,
            #cards,
            #footer {
                padding: 1rem;
            }

            .code {
                padding: 3rem;
            }
		}
		a {
			color: var(--nimiq-light-blue);
			text-decoration: none;
			cursor: pointer;		
		}
		span a{
			color: white;
		}
    </style>
</head>

  <body>
   
    <div id="content" class="content">
		<div class="nq-card">
            <header id="top" class="nq-gold-bg">
                <a href="https://nimiq.vision"><img src="./img/nv-banner.png" width="100%"></a>
            </header>
        
            <div class="nq-card-header" id="connection-status">
                    <a class="nq-link" href="./fts.html"><img src="./img/placeholder.png" class='rounded' width='100%' max-width='500px' ></a>
            <div class="nq-text">
                    <p>
                        <b>NIMIQ.VISION</b> allows you to accept <a href="https://nimiq.com" class="nq-link">$NIM</a> donations on your live stream!
                    </p>
            <center>
                <p class="nq-text-s nq-label">
                    <a class="nq-link nq-button green" href="./fts.html">Get Started</a>
                </p>
            </center>
            <center>
                <p class="nq-text" >
                    <a href="https://twitter.com/NimiqVision" class="nq-link">Tweet/DM</a> us your Stream URL so we can promote you!</p>
            </center>
				
	    	</div>
		</div>
	</div>

</body>
</html>