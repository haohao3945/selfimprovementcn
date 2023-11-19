// app.js


var challengesData = 
{
    "challenges":[
	  {
		"title": "职业发展",
		"description": "制定季度职业目标：确定要学习的3项新技能，并制定掌握它们的计划。"
	  },
	  {
		"title": "拓展人脉",
		"description": "本周与3位新专业人士在LinkedIn建立联系。与其中至少一人安排虚拟咖啡聊天。"
	  },
	  {
		"title": "自我发展",
		"description": "阅读詹姆斯·克利尔（James Clear）的《原子习惯》。在接下来的7天内实施来自该书的一项新习惯。"
	  },
	  {
		"title": "健康改善",
		"description": "本月尝试新的锻炼方式（如瑜伽、骑自行车或游泳），并承诺每周至少锻炼两次。"
	  },
	  {
		"title": "家庭团聚",
		"description": "本周末计划家庭烹饪之夜。为每位家庭成员分配任务，共同准备一顿晚餐。"
	  },
	  {
		"title": "财务规划",
		"description": "创建一张表格以跟踪月度开支。回顾并分类上个月的所有开支。"
	  },
	  {
		"title": "职业技能培养",
		"description": "报名参加与您领域相关的在线课程。在接下来的5天内完成第一个模块。"
	  },
	  {
		"title": "拓展人脉后续",
		"description": "向您在会议上认识的最后3位人发送个性化后续电子邮件。分享与您的对话相关的文章或资源。"
	  },
	  {
		"title": "自我反思",
		"description": "每天早晨练习10分钟的正念。使用冥想应用或指南。"
	  },
	  {
		"title": "健康监测",
		"description": "使用健身跟踪应用程序监测每天的步数和食物摄入情况，持续7天。设定改进的具体目标。"
	  },
	  {
		"title": "家庭沟通",
		"description": "安排一次家庭头脑风暴会议。讨论即将到来的度假计划的想法，并制定实现之一的步骤。"
	  },
	  {
		"title": "财务回顾",
		"description": "审查您当前的投资和储蓄情况。在接下来的3天内研究新的投资机会。"
	  },
	  {
		"title": "职业人脉活动",
		"description": "组织一次虚拟人际交往活动。邀请10位同事或行业联系人进行30分钟的Zoom聚会。"
	  },
	  {
		"title": "自我提升播客",
		"description": "在通勤途中收听一段自我提升播客。做笔记，并在24小时内应用一个可行的建议。"
	  },
	  {
		"title": "身体健康挑战",
		"description": "报名参加当地的慈善跑步活动。制定未来3个月的培训计划，力争逐步提高。"
	  },
	  {
		"title": "家庭休息日",
		"description": "本周末计划一个无屏幕的日子。为家庭团聚安排户外活动或桌游。"
	  },
    {
        "title": "财务教育",
        "description": "参加财务规划网络研讨会。在接下来的7天内实施一个新的财务习惯。"
    },
    {
        "title": "技能分享",
        "description": "向同事或家人教授你擅长的技能。安排本周末进行为期1小时的学习。"
    },
    {
        "title": "网络导师",
        "description": "成为新同事的导师。安排每两周进行一次跟进，提供指导和支持。"
    },
    {
        "title": "自我发展研讨会",
        "description": "计划一个周末的自我发展研讨会。设定在此期间要实现的具体目标，并安排后续行动。"
    },
    {
        "title": "职业发展 - 演讲技巧",
        "description": "练习一个关于最近项目的5分钟演讲。录制自己的演讲并找出需要改进的地方。"
    },
    {
        "title": "社交网络 - 社交媒体参与",
        "description": "今天与Twitter或LinkedIn上的5篇与行业相关的帖子互动。以深思熟虑的评论或有价值的见解参与。"
    },
    {
        "title": "自我发展 - 时间管理",
        "description": "在接下来的3天内使用番茄工作法。工作25分钟，然后休息5分钟，然后重复。"
    },
    {
        "title": "健康改进 - 饮食计划",
        "description": "为下周计划和准备餐点。安排在本周日留出时间来制定餐点计划并相应购物。"
    },
    {
        "title": "家庭团结 - 创意项目",
        "description": "开始一个家庭艺术项目。收集材料并共同策划在整个月内完成的联合创作。"
    },
    {
        "title": "财务规划 - 开支回顾",
        "description": "分析上个月的开支。找出可以减少支出的3个领域，并在本周采取行动。"
    },
    {
        "title": "职业技能构建 - 编程练习",
        "description": "在接下来的10天内，每天花30分钟在编程平台上（例如Codecademy）练习。完成一个模块。"
    },
    {
        "title": "网络跟进 - 文章分享",
        "description": "通过电子邮件或LinkedIn向2位联系人分享一篇最近的与行业相关的文章，然后开始讨论。"
    },
    {
        "title": "自我反思 - 感恩日记",
        "description": "开始一个感恩日记。每晚写下你当天感激的3件事情，持续一周。"
    },
    {
        "title": "健康监测 - 饮水量",
        "description": "在接下来的7天内跟踪你的饮水量。每天至少喝8杯水。"
    },
    {
        "title": "家庭沟通 - 目标设定",
        "description": "举行家庭会议，为下个月设定共同的目标。为每个家庭成员分配任务。"
    },
    {
        "title": "财务回顾 - 投资研究",
        "description": "研究新的投资机会。将其与你当前的投资进行比较和对比，一周内做出决策。"
    },
    {
        "title": "职业网络活动 - 虚拟咖啡聊天",
        "description": "安排本周与不同的行业专业人士进行3次虚拟咖啡聊天。分享见解并互相学习。"
    },
    {
        "title": "自我提升播客 - 实施挑战",
        "description": "从播客节目中选择一个可行的建议，并在24小时内实施。跟踪结果。"
    },
    {
        "title": "身体健康挑战 - 力量训练",
        "description": "开始一个初学者的力量训练计划。在接下来的一个月内每周至少进行3次锻炼。"
    },
    {
        "title": "家庭时间 - 自制水疗日",
        "description": "在家里组织一个家庭水疗日。制作DIY面膜或相互按摩，放松身心。"
    },
    {
        "title": "财务教育 - 参加网络研讨会",
        "description": "参加财务规划研讨会。在接下来的5天内实施一项建议。"
    },
    {
        "title": "技能分享 - 实际演示",
        "description": "向小组展示你的技能的实际演示。鼓励提问和实际操作练习。"
    },
    {
        "title": "人际关系指导 - 进展审查",
        "description": "安排与你的受指导者的进展审查会议。讨论成就并解决任何挑战。"
    },
    {
        "title": "自我发展撤退 - 行动计划制定",
        "description": "计划一个周末的撤退，以制定下一季度的详细行动计划。将目标拆分为可执行步骤。"
    },
    {
        "title": "职业发展 - 案例研究分析",
        "description": "选择你领域的一个案例研究。在接下来的5天内分析并准备一个简短的演示。"
    },
    {
        "title": "人际关系 - 参加网络研讨会",
        "description": "本月参加3个网络研讨会。积极参与问答环节，之后与至少2名参与者联系。"
    },
    {
        "title": "自我发展 - 日记习惯",
        "description": "每天进行10分钟的日记。反思成就、挑战和愿景。"
    },
    {
        "title": "健康改善 - 每日伸展",
        "description": "将每日的伸展练习纳入你的日常生活。每天侧重不同的肌肉群。"
    },
    {
        "title": "家庭联系 - 食谱挑战",
        "description": "每周一起做一道新的家庭食谱。轮流选择食谱并领导烹饪。"
    },
    {
        "title": "财务规划 - 投资研究",
        "description": "本周研究一个新的投资机会。在考虑之前分析风险和潜在回报。"
    },
    {
        "title": "职业技能建设 - 演讲练习",
        "description": "准备并进行演讲练习。录制并回顾以改进演讲技巧和清晰度。"
    },
    {
        "title": "人际关系跟进 - 合作项目",
        "description": "向2个联系人提出联合项目或合作想法。讨论好处和潜在的下一步。"
    },
    {
        "title": "自我反思 - 感恩实践",
        "description": "在接下来的一周里，每天向一个新的人表达感恩之情。写下笔记或谈论感恩之事。"
    },
    {
        "title": "健康监控 - 饮食日记",
        "description": "在接下来的10天里保持详细的食物日记。回顾并调整饮食习惯以获得更好的营养。"
    },
    {
        "title": "家庭沟通 - 每周目标回顾",
        "description": "每周日留出时间来回顾家庭目标。庆祝成就并计划下周的计划。"
    },
    {
        "title": "财务回顾 - 储蓄挑战",
        "description": "挑战自己本月多储蓄15%。识别可以立即削减或减少的开支。"
    },
    {
        "title": "职业网络活动 - 导师会话",
        "description": "主持虚拟导师会话。将行业新手与经验丰富的专业人士配对进行讨论。"
    },
    {
        "title": "自我提升播客 - 实施冲刺",
        "description": "在接下来的7天内实施播客中的5个可行建议。评估它们对你的日常生活的影响。"
    },
    {
        "title": "身体健康挑战 - 活跃休息",
        "description": "在工作时间内加入短暂的活跃休息。每小时设置一个定时器来进行伸展或短暂散步。"
    },
    {
        "title": "家庭时光 - 探索大自然",
        "description": "计划一个家庭大自然探索日。发现当地的公园或步道，并一起参与户外活动。"
    },
    {
        "title": "财务教育 - 自助投资模拟",
        "description": "在纸上模拟一个投资策略，持续2周。跟踪其表现并重新评估。"
    },
    {
        "title": "技能分享 - 研讨会展示",
        "description": "为你的技能做一个迷你研讨会。创建互动会话并提供进一步学习的资源。"
    },
    {
        "title": "网络导师 - 挑战讨论",
        "description": "与你的学员讨论特定的职业挑战。一起研究解决方案并设定可行步骤。"
    },
    {
        "title": "自我发展撤退 - 目标回顾",
        "description": "在个人撤退期间回顾你的短期和长期目标。根据进展修改行动计划。"
    },
    {
        "title": "职业晋升 - 网络活动准备",
        "description": "为下一个网络活动准备一个简要介绍。练习并寻求改进的反馈。"
    },
    {
        "title": "网络 - 专业群体贡献",
        "description": "积极参与2个专业群体的讨论。分享见解或文章并促进有意义的对话。"
    },
    {
        "title": "自我提升 - 正念挑战",
        "description": "每天练习5分钟的正念冥想，持续14天。观察对注意力和冷静度的影响。"
    },
    {
        "title": "健康改进 - 健身课试听",
        "description": "参加新的健身课试听。承诺在下周至少参加3节课。"
    },
    {
        "title": "家庭情感 - 记忆之夜",
        "description": "创建数字或实体的记忆板，包括旧照片。在家庭之夜期间分享故事和回忆。"
    },
    {
        "title": "财务规划 - 费用评估",
        "description": "评估上个月的开支。确定3个可以降低成本的领域，并立即采取行动。"
    },
    {
        "title": "职业技能培训 - 技术技能精进",
        "description": "每天投入30分钟来精进技术技能（例如，编码，设计），持续10天。"
    },
    {
        "title": "网络后续 - 文章交流",
        "description": "与3位联系人交换有见地的文章。讨论它们的影响和在你的工作中的潜在应用。"
    },
    {
        "title": "自我反思 - 积极肯定",
        "description": "每天写下3个积极的肯定句，持续1周。反思它们对你的心态的影响。"
    },
    {
        "title": "健康监控 - 卡路里追踪",
        "description": "跟踪接下来7天的卡路里摄入量。根据观察到的模式调整饮食习惯。"
    },
    {
        "title": "家庭沟通 - 协作任务",
        "description": "为家庭指定一个协作任务，目标是在月底完成。一起策划并执行任务。"
    },
    {
        "title": "财务回顾 - 投资分散化",
        "description": "在下个星期内进行研究并多样化投资。将资金分配到潜在增长领域。"
    },
    {
        "title": "职业社交活动 - 同行讨论小组",
        "description": "组织一个与行业同行的小组讨论。分享见解和经验，促进学习和合作。"
    },
    {
        "title": "自我提升播客 - 每周总结",
        "description": "总结每周播客节目的要点。立即执行一个所学到的课程。"
    },
    {
        "title": "身体健康挑战 - 每日饮水目标",
        "description": "设定每天饮水特定数量的目标。在接下来的10天内跟踪并达到目标。"
    },
    {
        "title": "家庭时光 - 志愿者活动",
        "description": "参与家庭志愿者活动。计划并参与本地社区服务活动。"
    },
    {
        "title": "财务教育 - 专家访谈",
        "description": "采访一位财务专家或顾问。在下个星期内执行他们的建议之一。"
    },
    {
        "title": "技能分享 - 技能交换会",
        "description": "与同事或家人交换技能。教授你的技能，并从对方那里学习。"
    },
    {
        "title": "社交导师 - 进展跟踪",
        "description": "与你的被指导者进行进展跟踪。确定成就并制定新的短期目标。"
    },
    {
        "title": "自我发展撤退 - 行动计划实施",
        "description": "执行撤退期间制定的行动计划。随时调整策略并监控进展。"
    }
	]

}


//
	// track view 
	window.onload = function() {
    // Fetch the URL
    fetch('https://script.google.com/macros/s/AKfycbz7DtjhqlRZf7cqnLet4kTjmGcHnqi1AT0wIlpqwfS5Y467p8DiE01oHb_22GbYBY91dw/exec?view=1')
        .then(response => response.json())
        .then(data => {
            // Handle the data as needed
            console.log(data);
        })
        .catch(error => {
            // Handle errors
            console.error('Error fetching data:', error);
        });
};
		
     // Function to get a random challenge
        function getRandomChallenge() {
            var randomIndex = Math.floor(Math.random() * challengesData.challenges.length);
            return challengesData.challenges[randomIndex];
        }

        var currentChallengeIndex = 0;

        // Function to display the current challenge
        function displayCurrentChallenge() {
            var currentChallenge = challengesData.challenges[currentChallengeIndex];
            document.getElementById('slideChallengeText').textContent = currentChallenge.title + '\n'  + currentChallenge.description;
        }

        // Event listeners for buttons
		document.getElementById('randomChallengeBtn').addEventListener('click', function () {
			var randomChallenge = getRandomChallenge();
			document.getElementById('randomChallengeText').innerHTML = '<b>' + randomChallenge.title + '</b><br><br>' + randomChallenge.description;
		});

        document.getElementById('prevChallengeBtn').addEventListener('click', function () {
            if (currentChallengeIndex > 0) {
                currentChallengeIndex--;
                displayCurrentChallenge();
            }
        });

        document.getElementById('nextChallengeBtn').addEventListener('click', function () {
            if (currentChallengeIndex < challengesData.challenges.length - 1) {
                currentChallengeIndex++;
                displayCurrentChallenge();
            }
        });

        // Initial display
        displayCurrentChallenge();
		
		
		//Adjustment for the table 
		function confirmRow(button) {
			var row = button.parentNode.parentNode;
			var textareas = row.getElementsByTagName("textarea");
			var isEmpty = true;

			for (var i = 0; i < textareas.length; i++) {
				if (textareas[i].value.trim() !== "") {
					isEmpty = false;
					break;
				}
			}

			if (isEmpty) {
				alert("请填写行中的至少一个文本框");
			} else {
				console.log("textarea.length = ", textareas.length);

				// Convert NodeList to array to avoid dynamic changes
				var textareaArray = Array.from(textareas);

				for (var i = 0; i < textareaArray.length; i++) {
					// Add key listener for Enter key
					textareaArray[i].addEventListener("keydown", function (event) {
						if (event.key === "Enter") {
							// Prevent default behavior (new line in textarea)
							event.preventDefault();

							// Append a line break to the value
							this.value += "\n";
						}
					});

					// Convert textarea content to HTML
					textareaArray[i].outerHTML = "<p>" + textareaArray[i].value.replace(/\n/g, "<br>") + "</p>";
					console.log("textarea", i + 1, "= ", textareaArray[i].value);
				}
				button.style.display = "none";
			}
		}
        function deleteRow(button) {
            var row = button.parentNode.parentNode;
            row.remove();
        }

        function addRow() {
            var table = document.getElementById("retrospectiveTable");
            var newRow = table.insertRow(table.rows.length);
            var cells = [];

            for (var i = 0; i < 6; i++) {
                cells.push(newRow.insertCell(i));
                cells[i].innerHTML = '<textarea class="form-control"></textarea>';
            }

            var confirmButton = document.createElement("button");
            confirmButton.innerHTML = "确认";
            confirmButton.className = "btn btn-primary";
            confirmButton.onclick = function() {
                confirmRow(confirmButton);
            };

            var deleteButton = document.createElement("button");
            deleteButton.innerHTML = "删除行";
            deleteButton.className = "btn btn-danger";
            deleteButton.onclick = function() {
                deleteRow(deleteButton);
            };

            cells.push(newRow.insertCell(6));
            cells[6].appendChild(confirmButton);
            cells[6].appendChild(deleteButton);
        }
