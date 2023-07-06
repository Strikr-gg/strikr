const characters = [
  {
    id: 'CD_ManipulatingMastermind',
    assetName: 'CD_ManipulatingMastermind',
    name: 'Rune',
    portrait: '/i/character/portrait/T_UI_Portrait_CloseUp_ManipulatingMastermind.png',
    goalscore: '/i/character/goalscore/T_UI_Portrait_GoalScore_ManipulatingMastermind.png',
    bodyShot: '/i/character/body/T_UI_Portrait_Concept_ManipulatingMastermind.png',
  },
  {
    id: 'CD_TempoSniper',
    assetName: 'CD_TempoSniper',
    name: 'Estelle',
    portrait: '/i/character/portrait/T_UI_Portrait_CloseUp_TempoSniper.png',
    goalscore: '/i/character/goalscore/T_UI_Portrait_GoalScore_TempoSniper.png',
    bodyShot: '/i/character/body/T_UI_Portrait_Concept_TempoSniper.png',
  },
  {
    id: 'CD_CleverSummoner',
    assetName: 'CD_CleverSummoner',
    name: 'Juno',
    portrait: '/i/character/portrait/T_UI_Portrait_CloseUp_CleverSummoner.png',
    goalscore: '/i/character/goalscore/T_UI_Portrait_GoalScore_CleverSummoner.png',
    bodyShot: '/i/character/body/T_UI_Portrait_Concept_CleverSummoner.png',
  },
  {
    id: 'CD_HulkingBeast',
    assetName: 'CD_HulkingBeast',
    name: 'X',
    portrait: '/i/character/portrait/T_UI_Portrait_CloseUp_HulkingBeast.png',
    goalscore: '/i/character/goalscore/T_UI_Portrait_GoalScore_HulkingBeast.png',
    bodyShot: '/i/character/body/T_UI_Portrait_Concept_HulkingBeast.png',
  },
  {
    id: 'CD_AngelicSupport',
    assetName: 'CD_AngelicSupport',
    name: 'Atlas',
    portrait: '/i/character/portrait/T_UI_Portrait_CloseUp_AngelicSupport.png',
    goalscore: '/i/character/goalscore/T_UI_Portrait_GoalScore_AngelicSupport.png',
    bodyShot: '/i/character/body/T_UI_Portrait_Concept_AngelicSupport.png',
  },
  {
    id: 'CD_StalwartProtector',
    assetName: 'CD_StalwartProtector',
    name: 'Dubu',
    portrait: '/i/character/portrait/T_UI_Portrait_CloseUp_StalwartProtector.png',
    goalscore: '/i/character/goalscore/T_UI_Portrait_GoalScore_StalwartProtector.png',
    bodyShot: '/i/character/body/T_UI_Portrait_Concept_StalwartProtector.png',
  },
  {
    id: 'CD_FlexibleBrawler',
    assetName: 'CD_FlexibleBrawler',
    name: 'Juliette',
    portrait: '/i/character/portrait/T_UI_Portrait_CloseUp_FlexibleBrawler.png',
    goalscore: '/i/character/goalscore/T_UI_Portrait_GoalScore_FlexibleBrawler.png',
    bodyShot: '/i/character/body/T_UI_Portrait_Concept_FlexibleBrawler.png',
  },
  {
    id: 'CD_NimbleBlaster',
    assetName: 'CD_NimbleBlaster',
    name: 'Drek\'ar',
    portrait: '/i/character/portrait/T_UI_Portrait_CloseUp_NimbleMaster.png',
    goalscore: '/i/character/goalscore/T_UI_Portrait_GoalScore_NimbleBlaster.png',
    bodyShot: '/i/character/body/T_UI_Portrait_Concept_NimbleBlaster.png',
  },
  {
    id: 'CD_ChaoticRocketeer',
    assetName: 'CD_ChaoticRocketeer',
    name: 'Luna',
    portrait: '/i/character/portrait/T_UI_Portrait_CloseUp_ChaoticRocketeer.png',
    goalscore: '/i/character/goalscore/T_UI_Portrait_GoalScore_ChaoticRocketeer.png',
    bodyShot: '/i/character/body/T_UI_Portrait_Concept_ChaoticRocketeer.png',
  },
  {
    id: 'CD_EmpoweringEnchanter',
    assetName: 'CD_EmpoweringEnchanter',
    name: 'Era',
    portrait: '/i/character/portrait/T_UI_Portrait_CloseUp_EmpoweringEnchanter.png',
    goalscore: '/i/character/goalscore/T_UI_Portrait_GoalScore_EmpoweringEnchanter.png',
    bodyShot: '/i/character/body/T_UI_Portrait_Concept_EmpoweringEnchanter.png',
  },
  {
    id: 'CD_SpeedySkirmisher',
    assetName: 'CD_SpeedySkirmisher',
    name: 'Kai',
    portrait: '/i/character/portrait/T_UI_Portrait_CloseUp_SpeedySkirmisher.png',
    goalscore: '/i/character/goalscore/T_UI_Portrait_GoalScore_SpeedySkirmisher.png',
    bodyShot: '/i/character/body/T_UI_Portrait_Concept_SpeedySkirmisher.png',
  },
  {
    id: 'CD_MagicalPlaymaker',
    assetName: 'CD_MagicalPlaymaker',
    name: 'Ai.Mi',
    portrait: '/i/character/portrait/T_UI_Portrait_CloseUp_MagicalPlaymaker_Default.png',
    goalscore: '/i/character/goalscore/T_UI_Portrait_GoalScore_MagicalPlaymaker.png',
    bodyShot: '/i/character/body/T_UI_Portrait_Concept_MagicalPlaymaker.png',
  },
  {
    id: 'CD_ShieldUser',
    assetName: 'CD_ShieldUser',
    name: 'Asher',
    portrait: '/i/character/portrait/T_UI_Portrait_CloseUp_ShieldUser.png',
    goalscore: '/i/character/goalscore/T_UI_Portrait_GoalScore_ShieldUser.png',
    bodyShot: '/i/character/body/T_UI_Portrait_Concept_ShieldUser.png',
  },
  {
    id: 'CD_FlashySwordsman',
    assetName: 'CD_FlashySwordsman',
    name: 'Zentaro',
    portrait: '/i/character/portrait/T_UI_Portrait_CloseUp_FlashySwordsman.png',
    goalscore: '/i/character/goalscore/T_UI_Portrait_GoalScore_FlashySwordsman.png',
    bodyShot: '/i/character/body/T_UI_Portrait_Concept_FlashySwordsman.png',
  },
  {
    id: 'CD_RockOni',
    assetName: 'CD_RockOni',
    name: 'Vyce',
    portrait: '/i/character/portrait/T_UI_Portrait_CloseUp_AN_RockOni.png',
    goalscore: '/i/character/goalscore/T_UI_Portrait_GoalScore_RockOni.png',
    bodyShot: '/i/character/body/T_UI_Portrait_Concept_RockOni.png',
  },
  {
    id: 'CD_EDMOni',
    assetName: 'CD_EDMOni',
    name: 'Octavia',
    portrait: '/i/character/portrait/T_UI_Portrait_CloseUp_AN_EDMOni.png',
    goalscore: '/i/character/goalscore/T_UI_Portrait_GoalScore_EDMOni.png',
    bodyShot: '/i/character/body/T_UI_Portrait_Concept_EDMOni.png',
  },
  {
    id: 'CD_WhipFighter',
    assetName: 'CD_WhipFighter',
    name: 'Rasmus',
    portrait: '/i/character/portrait/T_UI_Portrait_CloseUp_WhipFighter.png',
    goalscore: '/i/character/goalscore/T_UI_Portrait_GoalScore_WhipFighter.png',
    bodyShot: '/i/character/body/T_UI_Portrait_Concept_WhipFighter.png',
  },
  {
    id: 'CD_GravityMage',
    assetName: 'CD_GravityMage',
    name: 'Finii',
    portrait: '/i/character/portrait/T_UI_Portrait_CloseUp_GravityMage.png',
    goalscore: '/i/character/goalscore/T_UI_Portrait_GoalScore_GravityMage.png',
    bodyShot: '/i/character/body/T_UI_Portrait_Concept_GravityMage.png',
  }
]

export default characters
