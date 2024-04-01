"use strict";(self.webpackChunkfhsdocs=self.webpackChunkfhsdocs||[]).push([[5894],{6042:t=>{t.exports=JSON.parse('{"blogPosts":[{"id":"/2024/03/31/welcome","metadata":{"permalink":"/blog/2024/03/31/welcome","source":"@site/blog/2024-03-31-welcome.md","title":"Welcome","description":"Welcome to the FHS-BAP Data Core website!","date":"2024-03-31T00:00:00.000Z","tags":[],"hasTruncateMarker":false,"authors":[{"name":"Ting Fang Alvin Ang","title":"FHS-BAP Data Core","imageURL":"/img/datacore/aa01_avatar.png","key":"alvin"},{"name":"Qiushan Tao","title":"FHS-BAP Data Core","imageURL":"/img/datacore/qt01_avatar.png","key":"qiushan"}],"frontMatter":{"title":"Welcome","authors":["alvin","qiushan"],"hide_table_of_contents":true},"unlisted":false,"nextItem":{"title":"Introduction to FHS Data","permalink":"/blog/2024/02/20/fhs-data-tutorial"}},"content":"#### Welcome to the FHS-BAP Data Core website!\\n\\nWe\'re delighted to have you here. As a central hub for managing and sharing data collected as part of the Framingham Heart Study Brain Aging Program (FHS-BAP), our mission is to advance Alzheimer\'s Disease (AD) research by ensuring the integrity, accessibility, and usability of valuable research data.\\n\\n> Explore our website to learn more about the comprehensive data we manage, our collaborative efforts to understand the complex links between modifiable risk factors and cognitive decline, and how we support ongoing research projects aimed at enhancing our understanding of AD.\\n\\n:::tip\\nWhether you\'re a researcher, collaborator, or simply interested in learning more about our work, we invite you to engage with us and join our efforts to make meaningful advancements in AD research.\\n::::\\n\\nThank you for visiting, and we look forward to connecting with you!"},{"id":"/2024/02/20/fhs-data-tutorial","metadata":{"permalink":"/blog/2024/02/20/fhs-data-tutorial","source":"@site/blog/2024-02-20-fhs-data-tutorial.md","title":"Introduction to FHS Data","description":"Introduction to Framingham Heart Study Data","date":"2024-02-20T00:00:00.000Z","tags":[{"label":"Training","permalink":"/blog/tags/training"}],"hasTruncateMarker":true,"authors":[{"name":"Michael Cummings","title":"FHS-BAP Data Core","imageURL":"/img/datacore/mc01_avatar.png","key":"mike"}],"frontMatter":{"title":"Introduction to FHS Data","authors":["mike"],"tags":["Training"],"hide_table_of_contents":true},"unlisted":false,"prevItem":{"title":"Welcome","permalink":"/blog/2024/03/31/welcome"},"nextItem":{"title":"BROC Data Query Tutorial","permalink":"/blog/2023/10/25/data-query-tutorial"}},"content":":::tip\\n[Introduction to Framingham Heart Study Data](https://mymedia.bu.edu/media/t/1_2etjgeeu)\\nThis is an introduction to Framingham Heart Study data, intended for new analysts with access to FHS data. \\nThe presentation covers FHS cohorts, datasets, and storage.\\n:::\\n\\n\x3c!--truncate--\x3e\\n\\n<video width=\\"560\\" height=\\"315\\" controls>\\n  <source src=\\"https://cfvod.kaltura.com/pd/p/2159741/sp/215974100/serveFlavor/entryId/1_2etjgeeu/v/1/ev/3/flavorId/1_w8hmo0cy/fileName/Introduction_to_Framingham_Heart_Study_Data_(HD_1080_-_WEB_(H264_4000)).mp4\\" type=\\"video/mp4\\" />\\n  Your browser does not support the video tag.\\n</video>"},{"id":"/2023/10/25/data-query-tutorial","metadata":{"permalink":"/blog/2023/10/25/data-query-tutorial","source":"@site/blog/2023-10-25-data-query-tutorial.md","title":"BROC Data Query Tutorial","description":"Introduction to BROC Data Query","date":"2023-10-25T00:00:00.000Z","tags":[{"label":"Training","permalink":"/blog/tags/training"}],"hasTruncateMarker":true,"authors":[{"name":"Xavier Serrano","title":"FHS-BAP Data Core","imageURL":"/img/datacore/xs01_avatar.png","key":"xavier"}],"frontMatter":{"title":"BROC Data Query Tutorial","authors":["xavier"],"tags":["Training"],"hide_table_of_contents":true},"unlisted":false,"prevItem":{"title":"Introduction to FHS Data","permalink":"/blog/2024/02/20/fhs-data-tutorial"},"nextItem":{"title":"FRAMID Transformation","permalink":"/blog/2023/05/28/get-framid"}},"content":":::tip\\n[Introduction to BROC Data Query](https://fhs.sail.codes/)\\nThe FHS-BAP Data Portal serves as a comprehensive resource for investigating brain aging \\nand disease within the Framingham Heart Study (FHS). It offers easy access to brain \\naging data and biospecimens, summary statistics, streamlined request submission, \\nand collaboration opportunities.\\n:::\\n\\n\x3c!--truncate--\x3e\\n\\n\\n#### Key Points:\\n\\n* Search and Discover: Navigate the database to find brain aging data and biospecimens.\\n* Data Summary: Obtain summary statistics and export them for proposal and grant applications.\\n* Request Portal: Streamline data and biospecimen request submissions through the FHS research application.\\n* Collaboration Opportunities: Engage with FHS-BAP researchers for collaborative projects and leverage collective expertise.\\n\\n<video width=\\"560\\" height=\\"315\\" controls>\\n  <source src=\\"https://fhs.sail.codes/assets/demo-with-narration-e4353e15.mp4\\" />\\n  Your browser does not support the video tag.\\n</video>"},{"id":"/2023/05/28/get-framid","metadata":{"permalink":"/blog/2023/05/28/get-framid","source":"@site/blog/2023-05-28-get-framid.md","title":"FRAMID Transformation","description":"FRAMID transformation","date":"2023-05-28T00:00:00.000Z","tags":[{"label":"R","permalink":"/blog/tags/r"},{"label":"idtype","permalink":"/blog/tags/idtype"},{"label":"framid","permalink":"/blog/tags/framid"}],"hasTruncateMarker":true,"authors":[{"name":"Qiushan Tao","title":"FHS-BAP Data Core","imageURL":"/img/datacore/qt01_avatar.png","key":"qiushan"}],"frontMatter":{"title":"FRAMID Transformation","authors":["qiushan"],"tags":["R","idtype","framid"],"hide_table_of_contents":true},"unlisted":false,"prevItem":{"title":"BROC Data Query Tutorial","permalink":"/blog/2023/10/25/data-query-tutorial"}},"content":":::tip\\n<code>FRAMID transformation</code>\\n\\nThis is an R code to obtain the \'framid\' given the \'idtype\' and \'id\' are known.\\n:::\\n\\n\x3c!--truncate--\x3e\\n\\n```r title=\\"get_framid.r\\"\\n#####################################################################\\n#  License      : This source code is licensed under the MIT license.\\n#  Author(s)    : FHS-BAP data core (QT).\\n#  Release date : TBA\\n#  Description  : Get the framid from IDTYPE and ID in FHS Data. \\n#  Usage        : library(dplyr)\\n#               : data <- data %>%\\n#               :     dplyr::mutate(framid = get_framid(idtype, id)\\n#####################################################################\\n\\nget_framid <- function(idtype, id) {\\n    if (!((length(idtype) == 1 & length(id) >= 1) | \\n          (length(idtype) ==     length(id)     ))) \\n         stop(\\"Error: the length of idtype and id did not match!\\")\\n    \\n    # mapping framid to idtype\\n    id_matrix <- data.frame(\\n        idtype        = c(0, 1, 2, 3, 7, 72), \\n        adjust_factor = c(0, 80000, 20000, 30000, 700000, 720000)\\n    )\\n    \\n    x <- merge(data.frame(idtype = idtype, id = id), \\n               id_matrix, by = \\"idtype\\", all.x = TRUE)\\n    return(x$id + x$adjust_factor)\\n}\\n```"}]}')}}]);