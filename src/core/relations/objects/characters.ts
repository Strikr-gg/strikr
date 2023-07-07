const characters = [
  {
    id: 'CD_ManipulatingMastermind',
    assetName: 'CD_ManipulatingMastermind',
    name: 'Rune',
    portrait: 'https://static.strikr.gg/file/Strikr/character/portrait/T_UI_Portrait_CloseUp_ManipulatingMastermind.png',
    goalscore: 'https://static.strikr.gg/file/Strikr/character/goalscore/T_UI_Portrait_GoalScore_ManipulatingMastermind.png',
    bodyShot: 'https://static.strikr.gg/file/Strikr/character/body/T_UI_Portrait_Concept_ManipulatingMastermind.png',
  },
  {
    id: 'CD_TempoSniper',
    assetName: 'CD_TempoSniper',
    name: 'Estelle',
    portrait: 'https://static.strikr.gg/file/Strikr/character/portrait/T_UI_Portrait_CloseUp_TempoSniper.png',
    goalscore: 'https://static.strikr.gg/file/Strikr/character/goalscore/T_UI_Portrait_GoalScore_TempoSniper.png',
    bodyShot: 'https://static.strikr.gg/file/Strikr/character/body/T_UI_Portrait_Concept_TempoSniper.png',
  },
  {
    id: 'CD_CleverSummoner',
    assetName: 'CD_CleverSummoner',
    name: 'Juno',
    portrait: 'https://static.strikr.gg/file/Strikr/character/portrait/T_UI_Portrait_CloseUp_CleverSummoner.png',
    goalscore: 'https://static.strikr.gg/file/Strikr/character/goalscore/T_UI_Portrait_GoalScore_CleverSummoner.png',
    bodyShot: 'https://static.strikr.gg/file/Strikr/character/body/T_UI_Portrait_Concept_CleverSummoner.png',
  },
  {
    id: 'CD_HulkingBeast',
    assetName: 'CD_HulkingBeast',
    name: 'X',
    portrait: 'https://static.strikr.gg/file/Strikr/character/portrait/T_UI_Portrait_CloseUp_HulkingBeast.png',
    goalscore: 'https://static.strikr.gg/file/Strikr/character/goalscore/T_UI_Portrait_GoalScore_HulkingBeast.png',
    bodyShot: 'https://static.strikr.gg/file/Strikr/character/body/T_UI_Portrait_Concept_HulkingBeast.png',
  },
  {
    id: 'CD_AngelicSupport',
    assetName: 'CD_AngelicSupport',
    name: 'Atlas',
    portrait: 'https://static.strikr.gg/file/Strikr/character/portrait/T_UI_Portrait_CloseUp_AngelicSupport.png',
    goalscore: 'https://static.strikr.gg/file/Strikr/character/goalscore/T_UI_Portrait_GoalScore_AngelicSupport.png',
    bodyShot: 'https://static.strikr.gg/file/Strikr/character/body/T_UI_Portrait_Concept_AngelicSupport.png',
  },
  {
    id: 'CD_StalwartProtector',
    assetName: 'CD_StalwartProtector',
    name: 'Dubu',
    portrait: 'https://static.strikr.gg/file/Strikr/character/portrait/T_UI_Portrait_CloseUp_StalwartProtector.png',
    goalscore: 'https://static.strikr.gg/file/Strikr/character/goalscore/T_UI_Portrait_GoalScore_StalwartProtector.png',
    bodyShot: 'https://static.strikr.gg/file/Strikr/character/body/T_UI_Portrait_Concept_StalwartProtector.png',
  },
  {
    id: 'CD_FlexibleBrawler',
    assetName: 'CD_FlexibleBrawler',
    name: 'Juliette',
    portrait: 'https://static.strikr.gg/file/Strikr/character/portrait/T_UI_Portrait_CloseUp_FlexibleBrawler.png',
    goalscore: 'https://static.strikr.gg/file/Strikr/character/goalscore/T_UI_Portrait_GoalScore_FlexibleBrawler.png',
    bodyShot: 'https://static.strikr.gg/file/Strikr/character/body/T_UI_Portrait_Concept_FlexibleBrawler.png',
  },
  {
    id: 'CD_NimbleBlaster',
    assetName: 'CD_NimbleBlaster',
    name: 'Drek\'ar',
    portrait: 'https://static.strikr.gg/file/Strikr/character/portrait/T_UI_Portrait_CloseUp_NimbleMaster.png',
    goalscore: 'https://static.strikr.gg/file/Strikr/character/goalscore/T_UI_Portrait_GoalScore_NimbleBlaster.png',
    bodyShot: 'https://static.strikr.gg/file/Strikr/character/body/T_UI_Portrait_Concept_NimbleBlaster.png',
  },
  {
    id: 'CD_ChaoticRocketeer',
    assetName: 'CD_ChaoticRocketeer',
    name: 'Luna',
    portrait: 'https://static.strikr.gg/file/Strikr/character/portrait/T_UI_Portrait_CloseUp_ChaoticRocketeer.png',
    goalscore: 'https://static.strikr.gg/file/Strikr/character/goalscore/T_UI_Portrait_GoalScore_ChaoticRocketeer.png',
    bodyShot: 'https://static.strikr.gg/file/Strikr/character/body/T_UI_Portrait_Concept_ChaoticRocketeer.png',
  },
  {
    id: 'CD_EmpoweringEnchanter',
    assetName: 'CD_EmpoweringEnchanter',
    name: 'Era',
    portrait: 'https://static.strikr.gg/file/Strikr/character/portrait/T_UI_Portrait_CloseUp_EmpoweringEnchanter.png',
    goalscore: 'https://static.strikr.gg/file/Strikr/character/goalscore/T_UI_Portrait_GoalScore_EmpoweringEnchanter.png',
    bodyShot: 'https://static.strikr.gg/file/Strikr/character/body/T_UI_Portrait_Concept_EmpoweringEnchanter.png',
  },
  {
    id: 'CD_SpeedySkirmisher',
    assetName: 'CD_SpeedySkirmisher',
    name: 'Kai',
    portrait: 'https://static.strikr.gg/file/Strikr/character/portrait/T_UI_Portrait_CloseUp_SpeedySkirmisher.png',
    goalscore: 'https://static.strikr.gg/file/Strikr/character/goalscore/T_UI_Portrait_GoalScore_SpeedySkirmisher.png',
    bodyShot: 'https://static.strikr.gg/file/Strikr/character/body/T_UI_Portrait_Concept_SpeedySkirmisher.png',
  },
  {
    id: 'CD_MagicalPlaymaker',
    assetName: 'CD_MagicalPlaymaker',
    name: 'Ai.Mi',
    portrait: 'https://static.strikr.gg/file/Strikr/character/portrait/T_UI_Portrait_CloseUp_MagicalPlaymaker_Default.png',
    goalscore: 'https://static.strikr.gg/file/Strikr/character/goalscore/T_UI_Portrait_GoalScore_MagicalPlaymaker.png',
    bodyShot: 'https://static.strikr.gg/file/Strikr/character/body/T_UI_Portrait_Concept_MagicalPlaymaker.png',
  },
  {
    id: 'CD_ShieldUser',
    assetName: 'CD_ShieldUser',
    name: 'Asher',
    portrait: 'https://static.strikr.gg/file/Strikr/character/portrait/T_UI_Portrait_CloseUp_ShieldUser.png',
    goalscore: 'https://static.strikr.gg/file/Strikr/character/goalscore/T_UI_Portrait_GoalScore_ShieldUser.png',
    bodyShot: 'https://static.strikr.gg/file/Strikr/character/body/T_UI_Portrait_Concept_ShieldUser.png',
  },
  {
    id: 'CD_FlashySwordsman',
    assetName: 'CD_FlashySwordsman',
    name: 'Zentaro',
    portrait: 'https://static.strikr.gg/file/Strikr/character/portrait/T_UI_Portrait_CloseUp_FlashySwordsman.png',
    goalscore: 'https://static.strikr.gg/file/Strikr/character/goalscore/T_UI_Portrait_GoalScore_FlashySwordsman.png',
    bodyShot: 'https://static.strikr.gg/file/Strikr/character/body/T_UI_Portrait_Concept_FlashySwordsman.png',
  },
  {
    id: 'CD_RockOni',
    assetName: 'CD_RockOni',
    name: 'Vyce',
    portrait: 'https://static.strikr.gg/file/Strikr/character/portrait/T_UI_Portrait_CloseUp_AN_RockOni.png',
    goalscore: 'https://static.strikr.gg/file/Strikr/character/goalscore/T_UI_Portrait_GoalScore_RockOni.png',
    bodyShot: 'https://static.strikr.gg/file/Strikr/character/body/T_UI_Portrait_Concept_RockOni.png',
  },
  {
    id: 'CD_EDMOni',
    assetName: 'CD_EDMOni',
    name: 'Octavia',
    portrait: 'https://static.strikr.gg/file/Strikr/character/portrait/T_UI_Portrait_CloseUp_AN_EDMOni.png',
    goalscore: 'https://static.strikr.gg/file/Strikr/character/goalscore/T_UI_Portrait_GoalScore_EDMOni.png',
    bodyShot: 'https://static.strikr.gg/file/Strikr/character/body/T_UI_Portrait_Concept_EDMOni.png',
  },
  {
    id: 'CD_WhipFighter',
    assetName: 'CD_WhipFighter',
    name: 'Rasmus',
    portrait: 'https://static.strikr.gg/file/Strikr/character/portrait/T_UI_Portrait_CloseUp_WhipFighter.png',
    goalscore: 'https://static.strikr.gg/file/Strikr/character/goalscore/T_UI_Portrait_GoalScore_WhipFighter.png',
    bodyShot: 'https://static.strikr.gg/file/Strikr/character/body/T_UI_Portrait_Concept_WhipFighter.png',
  },
  {
    id: 'CD_GravityMage',
    assetName: 'CD_GravityMage',
    name: 'Finii',
    portrait: 'https://static.strikr.gg/file/Strikr/character/portrait/T_UI_Portrait_CloseUp_GravityMage.png',
    goalscore: 'https://static.strikr.gg/file/Strikr/character/goalscore/T_UI_Portrait_GoalScore_GravityMage.png',
    bodyShot: 'https://static.strikr.gg/file/Strikr/character/body/T_UI_Portrait_Concept_GravityMage.png',
  }
]

export default characters
