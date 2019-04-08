(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{394:function(t,s,a){"use strict";a.r(s);var n=a(43),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h4",{attrs:{id:"azure-tips-and-tricks-part-175-machine-learning-with-ml-net-and-azure-functions-part-2-of-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#azure-tips-and-tricks-part-175-machine-learning-with-ml-net-and-azure-functions-part-2-of-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Azure Tips and Tricks Part 175 - Machine Learning with ML.NET and  Azure Functions - Part 2 of 2")]),t._v(" "),a("h4",{attrs:{id:"intro"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#intro","aria-hidden":"true"}},[t._v("#")]),t._v(" Intro")]),t._v(" "),a("p",[t._v("Machine learning can be tricky. Fortunately, Azure is coming up with ways to make it easier for developers to jump into machine learning. In part 1 of this post on ML.NET and Azure Functions, you created a machine learning model with "),a("a",{attrs:{href:"https://www.microsoft.com/net/apps/machinelearning-ai/ml-dotnet",target:"_blank",rel:"noopener noreferrer"}},[t._v("ML.NET"),a("OutboundLink")],1),t._v("  that categorizes irises. You also set up a serverless architecture environment with Azure Functions and uploaded your model to it. In this post, you’re going to finish by building an app that uses your machine learning model.")]),t._v(" "),a("h4",{attrs:{id:"identify-irisis-like-a-machine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#identify-irisis-like-a-machine","aria-hidden":"true"}},[t._v("#")]),t._v(" Identify irisis like a Machine")]),t._v(" "),a("p",[t._v("This is "),a("router-link",{attrs:{to:"./tip175/"}},[t._v("part 2")]),t._v(" of a two part post on ML.NET inspired by Luis Quintanilla’s "),a("a",{attrs:{href:"http://luisquintanilla.me/2018/08/21/serverless-machine-learning-mlnet-azure-functions/",target:"_blank",rel:"noopener noreferrer"}},[t._v("article"),a("OutboundLink")],1),t._v(" about using ML.NET with Azure Functions, where he took these two great ideas and combined them. Picking up "),a("router-link",{attrs:{to:"./tip145/"}},[t._v("with Part 1")]),t._v(", you are going to create a new Azure Function project using Visual Studio.")],1),t._v(" "),a("p",[t._v("Note: Make sure you have the Azure Workload installed to see this template.")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/azurefunction.png")}}),t._v(" "),a("p",[t._v("Open up the "),a("strong",[t._v("demo")]),t._v(" solution from part 1 in Visual Studio and create a new project using the Azure Functions project template called "),a("strong",[t._v("serverless_ai")]),t._v(".")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/httptrigger.png")}}),t._v(" "),a("p",[t._v("When prompted, select the "),a("strong",[t._v("Http trigger")]),t._v(" option and connect it to your Azure storage account for the project ("),a("strong",[t._v("mlnetdemostorage1")]),t._v(" for this post). Then complete the following steps:\n•\tUse NuGet to add the "),a("strong",[t._v("Microsoft.ML")]),t._v(" package to your project.\n•\tCopy the "),a("strong",[t._v("IrisData.cs")]),t._v(" and "),a("strong",[t._v("IrisPrediction.cs")]),t._v(" files from your model project to the "),a("em",[t._v("serverless_ai")]),t._v(" project. You’ll need them both again.")]),t._v(" "),a("p",[t._v("Change the name of the Http trigger class "),a("em",[t._v("Function1")]),t._v(" to "),a("em",[t._v("Predict")]),t._v(" and copy in the following code:")]),t._v(" "),a("div",{staticClass:"language-csharp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" Newtonsoft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" Microsoft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ML"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" serverless_ai\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Predict")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FunctionName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Predict"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IActionResult")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpTrigger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AuthorizationLevel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Function"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"get"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"post"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Route "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpRequest")]),t._v(" req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Blob")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"models/model.zip"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" FileAccess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Read"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Connection "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AzureWebJobsStorage"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Stream")]),t._v(" serializedModel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TraceWriter")]),t._v(" log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Microsoft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ML"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Runtime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LoadTransform"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Microsoft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ML"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Runtime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Learners"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LinearClassificationTrainer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Microsoft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ML"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Runtime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Internal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CpuMath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SseUtils"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Microsoft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ML"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Runtime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FastTree"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FastTree"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Error loading ML.NET"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StatusCodeResult")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Read incoming request body")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),t._v(" requestBody "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StreamReader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ReadToEnd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("requestBody"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Bind request body to IrisData object")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IrisData")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" JsonConvert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token generic-method"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("DeserializeObject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IrisData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("requestBody"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Load prediction model")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" model "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" PredictionModel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token generic-method"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ReadAsync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IrisData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IrisPrediction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("serializedModel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Make prediction")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IrisPrediction")]),t._v(" prediction "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Predict")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Return prediction")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("IActionResult"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OkObjectResult")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prediction"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PredictedLabels"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br"),a("span",{staticClass:"line-number"},[t._v("39")]),a("br"),a("span",{staticClass:"line-number"},[t._v("40")]),a("br")])]),a("p",[t._v("These lines use your model to evaluate new iris data to make a prediction. Your app is ready for testing.")]),t._v(" "),a("h4",{attrs:{id:"test-locally-before-deploying"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-locally-before-deploying","aria-hidden":"true"}},[t._v("#")]),t._v(" Test locally before deploying")]),t._v(" "),a("p",[t._v("To test the Azure Function app on your local machine, check your "),a("strong",[t._v("local.settings.json")]),t._v(" file to make sure that "),a("strong",[t._v("AzureWebJobsStorage")]),t._v(" has a value associated with it. This is how your local app will find your uploaded model on your Azure storage account. If this has a value (and it should if you bound the project to your account when you created it), you can just "),a("em",[t._v("F5")]),t._v(" the "),a("em",[t._v("serverless_ai")]),t._v(" project in order to run it.\nNow open up "),a("a",{attrs:{href:"https://www.getpostman.com/apps",target:"_blank",rel:"noopener noreferrer"}},[t._v("Postman"),a("OutboundLink")],1),t._v("  (or a similar REST API tool) and send a POST call to http://localhost:7071/api/Predict with the following body:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n "SepalLength": 3.3,\n "SepalWidth": 1.6,\n "PetalLength": 0.2,\n "PetalWidth": 5.1\n}\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("If all is well, the categorizer will return “Iris-verginica”.")]),t._v(" "),a("h4",{attrs:{id:"to-deploy-skynet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#to-deploy-skynet","aria-hidden":"true"}},[t._v("#")]),t._v(" To deploy Skynet")]),t._v(" "),a("p",[t._v("… or whatever AI you are deploying from Visual Studio, go to your build settings in the toolbar.")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/publish.png")}}),t._v(" "),a("p",[t._v("Select “Publish serverless_ai” to deploy your Azure Function app.")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/test_in_portal.png")}}),t._v(" "),a("p",[t._v("To test the app deployment in the Azure Portal, select you Azure Function app under "),a("strong",[t._v("mlnetdemo")]),t._v(" (or however you named it) and then pick the "),a("strong",[t._v("Predict")]),t._v(" function under that. Use the "),a("strong",[t._v("Test")]),t._v(" panel to the right of the screen to see your deployed app in action.")]),t._v(" "),a("h4",{attrs:{id:"wrap-up"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wrap-up","aria-hidden":"true"}},[t._v("#")]),t._v(" Wrap-up")]),t._v(" "),a("p",[t._v("This will place your iris categorizer out on Azure for other people to try.  Congratulations! You are now able to deploy artificial intelligences to the cloud.")])])},[],!1,null,null,null);s.default=e.exports}}]);