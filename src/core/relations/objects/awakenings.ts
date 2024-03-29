const awakenings = [
  {
    'id': 'T_AdrenalineRush',
    'image': 'https://static.strikr.gg/file/Strikr/awakening/T_AdrenalineRush.png',
    'name': {
      en: 'Adrenaline Rush'
    },
    'description': {
      en: 'Ability {buff:cooldowns} reduced by {time:1s}. Earning a Takedown increases {buff:Speed} by {value:100%} for {time:8s} and reduces current {buff:cooldowns} by {time:5s}.'
    }
  },
  {
    'id': 'T_Aerials',
    'image': 'https://static.strikr.gg/file/Strikr/awakening/T_Aerials.png',
    'name': {
      en: 'Aerials'
    },
    'description': {
      en: '{skill_type:DASH} {buff:range}, {skill_type:BLINK} {buff:range}, and {skill_type:HASTE} effects {value:increased 75%}. {skill_type:PROJECTILES} {value:gain 35%} {buff:travel} or {buff:cast range}.'
    }
  },
  {
    'id': 'T_BigFish',
    'image': 'https://static.strikr.gg/file/Strikr/awakening/T_BigFish.png',
    'name': {
      en: 'Big Fish'
    },
    'description': {
      en: 'Gain {value:40% Size} and {value:300 max} {heal:Stagger}.'
    }
  },
  {
    'id': 'T_BuiltDifferent',
    'image': 'https://static.strikr.gg/file/Strikr/awakening/T_BuiltDifferent.png',
    'name': {
      en: 'BuiltDifferent'
    },
    'description': {
      en: '{value:Gain 40%} {buff:Size}. Your {skill_type:IMPACT} abilities {damage:hit 10% harder} (2% on Core)}.'
    }
  },
  {
    'id': 'T_BulkUp',
    'image': 'https://static.strikr.gg/file/Strikr/awakening/T_BulkUp.png',
    'name': {
      en: 'Bulk Up'
    },
    'description': {
      en: '{value:Gain 300 max} {heal:Stagger} and {value:1.5} {buf:Power} {value:per 100 max Stagger}.'
    }
  },
  {
    'id': 'T_CastToLast',
    'image': 'https://static.strikr.gg/file/Strikr/awakening/T_CastToLast.png',
    'name': {
      en: 'Cast To Last'
    },
    'description': {
      en: 'Ability {buff:BUFFS} and {debuff:DEBUFFS} you cast {value:last 70% longer}. {skill_type:CREATIONS} {value:last 35% longer}.'
    }
  },
  {
    'id': 'T_Chronoboost',
    'image': 'https://static.strikr.gg/file/Strikr/awakening/T_Chronoboost.png',
    'name': {
      en: 'Chronoboost'
    },
    'description': {
      en: '{skill_type:DASH} {buff:range}, {skill_type:BLINK} {buff:range}, and {skill_type:HASTE} effects {value:increased 75%}. Ability {buff:BUFFS} and {debuff:DEBUFFS} {value:last 35% longer}.'
    }
  },
  {
    'id': 'T_DeadEye',
    'image': 'https://static.strikr.gg/file/Strikr/awakening/T_DeadEye.png',
    'name': {
      en: 'Deadeye'
    },
    'description': {
      en: '{damage:Hit} {value:30% harder (7% to Core)} against targets at {value:600+ range}.'
    }
  },
  {
    'id': 'T_ExtraSpecial',
    'image': 'https://static.strikr.gg/file/Strikr/awakening/T_ExtraSpecial.png',
    'name': {
      en: 'Extra Special'
    },
    'description': {
      en: '{skill:SPECIAL} {buff:cooldown} {value:reduced by 40%}. Each face off its {buff:cooldown} is reset.'
    }
  },
  {
    'id': 'T_GlassCannon',
    'image': 'https://static.strikr.gg/file/Strikr/awakening/T_GlassCannon.png',
    'name': {
      en: 'Glass Cannon'
    },
    'description': {
      en: 'Gain {value:8} {damage:Power} and {value:4%} {buff:Speed} {time:every 2.5s} ({value:up to 40} {buff:Power} and {value:20%} {buff:Speed}).\nGetting hit resets the timer.'
    }
  },
  {
    'id': 'T_HotShot',
    'image': 'https://static.strikr.gg/file/Strikr/awakening/T_HotShot.png',
    'name': {
      en: 'Hotshot'
    },
    'description': {
      en: 'Character abilities {damage:hit} the {core:Core} {value:10% harder} and refund {value:30% of the ability\'s} {buff:cooldown} (once per cast).'
    }
  },
  {
    'id': 'T_ImpactSpecialist',
    'image': 'https://static.strikr.gg/file/Strikr/awakening/T_ImpactSpecialist.png',
    'name': {
      en: 'Specialized Training'
    },
    'description': {
      en: '{skill:SPECIAL} {damage:hits} {value:50% harder} ({value:10% to Core}) and {heal:heals} {value:55% more}.'
    }
  },
  {
    'id': 'T_MissilePropulsion',
    'image': 'https://static.strikr.gg/file/Strikr/awakening/T_MissilePropulsion.png',
    'name': {
      en: 'Missile Propulsion'
    },
    'description': {
      en: '{skill_type:PROJECTILES} gain {value:70%} {buff:travel} or {buff:cast range} and {damage:hit} {value:15% harder}.'
    }
  },
  {
    'id': 'T_MomentumBoots',
    'image': 'https://static.strikr.gg/file/Strikr/awakening/T_MomentumBoots.png',
    'name': {
      en: 'Boots of Momentum'
    },
    'description': {
      en: ''
    }
  },
  {
    'id': 'T_Monumentalist',
    'image': 'https://static.strikr.gg/file/Strikr/awakening/T_Monumentalist.png',
    'name': {
      en: 'Monumentalist'
    },
    'description': {
      en: '{skill_type:CREATIONS} gain {value:100%} {buff:size} and {damage:hit} {value:15% harder} ({value:4% to Core}).'
    }
  },
  {
    'id': 'T_OneTwoPunch',
    'image': 'https://static.strikr.gg/file/Strikr/awakening/T_OneTwoPunch.png',
    'name': {
      en: 'One-Two Punch'
    },
    'description': {
      en: '{damage:Hit} {value:25% harder} ({value:5% to Core}) against targets you\'ve hit within {time:2.5s}.'
    }
  },
  {
    'id': 'T_OrbDancer',
    'image': 'https://static.strikr.gg/file/Strikr/awakening/T_OrbDancer.png',
    'name': {
      en: 'Orb Dancer'
    },
    'description': {
      en: ''
    }
  },
  {
    'id': 'T_OrbPonderer',
    'image': 'https://static.strikr.gg/file/Strikr/awakening/T_OrbPonderer.png',
    'name': {
      en: 'Orb Ponderer'
    },
    'description': {
      en: 'Active {buff:Cooldown Reduction}: {value:25%"} ({value:45% when fully stacked})'
    }
  },
  {
    'id': 'T_OrbSharer',
    'image': 'https://static.strikr.gg/file/Strikr/awakening/T_OrbSharer.png',
    'name': {
      en: 'Orb Sharer'
    },
    'description': {
      en: ''
    }
  },
  {
    'id': 'T_PeakPerformance',
    'image': 'https://static.strikr.gg/file/Strikr/awakening/T_PeakPerformance.png',
    'name': {
      en: 'Peak Performance'
    },
    'description': {
      en: 'Gain {value:300 max} {heal:Stagger} and {value:5%} {buff:Speed} {value:per 100 max} {heal:Stagger}.'
    }
  },
  {
    'id': 'T_PerfectForm',
    'image': 'https://static.strikr.gg/file/Strikr/awakening/T_PerfectForm.png',
    'name': {
      en: 'Perfect Form'
    },
    'description': {
      en: '{damage:Hits} {buff:reduce other ability cooldowns} by {value:12%}, up to {time:1.2s} per {damage:hit} ({value:4%/.4s for LIGHT hits}).'
    }
  },
  {
    'id': 'T_PrimeTime',
    'image': 'https://static.strikr.gg/file/Strikr/awakening/T_PrimeTime.png',
    'name': {
      en: 'Prime Time'
    },
    'description': {
      en: '{skill:PRIMARY} gains {value:+1 charge} and {damage:hits} {value:5% harder (2% to Core)}.'
    }
  },
  {
    'id': 'T_PrizeFighter',
    'image': 'https://static.strikr.gg/file/Strikr/awakening/T_PrizeFighter.png',
    'name': {
      en: 'Prize Fighter'
    },
    'description': {
      en: 'Begin each set with {value:1 Prize Fighter stack}, {value:granting 25 Power}.\nTakedowns grant {value:1 Prize Fighter stack (max 3 stacks)}, but {debuff:getting K.O.\'d removes 1 stack}.\nStacks resets between sets.'
    }
  },
  {
    'id': 'T_QuickStrike',
    'image': 'https://static.strikr.gg/file/Strikr/awakening/T_QuickStrike.png',
    'name': {
      en: 'Quick Strike'
    },
    'description': {
      en: '{skill:Strike} {buff:cooldown} {value:reduced by 25%}.\n{skill:Strike} {damage:hits} {value:grant 2 additional energy}.'
    }
  },
  {
    'id': 'T_RapidFire',
    'image': 'https://static.strikr.gg/file/Strikr/awakening/T_RapidFire.png',
    'name': {
      en: 'Rapid Fire'
    },
    'description': {
      en: '{skill:PRIMARY} {buff:cooldown reduced} {value:by 33%}.'
    }
  },
  {
    'id': 'T_ShockAndAwe',
    'image': 'https://static.strikr.gg/file/Strikr/awakening/T_ShockAndAwe.png',
    'name': {
      en: 'Heavy Impact'
    },
    'description': {
      en: '{skill_type:IMPACT} abilities {damage:hit} {value:15% harder} (3% on {core:Core})}. Whenever you {damage:hit} {value:2} or more targets with a single ability}, its {buff:cooldown} is {value:reduced by 25% (up to 10s)}.'
    }
  },
  {
    'id': 'T_SparkofAgility',
    'image': 'https://static.strikr.gg/file/Strikr/awakening/T_SparkofAgility.png',
    'name': {
      en: 'Spark of Agility'
    },
    'description': {
      en: 'SPARK - {value:Gain 2% Speed}, {value:plus 8% per SPARK you have}.'
    }
  },
  {
    'id': 'T_SparkofFocus',
    'image': 'https://static.strikr.gg/file/Strikr/awakening/T_SparkofFocus.png',
    'name': {
      en: 'Spark of Focus'
    },
    'description': {
      en: 'SPARK - {value:Gain 2} {buff:Cooldown Rate}, {value:plus 10 per SPARK you have}.'
    }
  },
  {
    'id': 'T_SparkofResilience',
    'image': 'https://static.strikr.gg/file/Strikr/awakening/T_SparkofResilience.png',
    'name': {
      en: 'Spark of Resilience'
    },
    'description': {
      en: 'SPARK - {value:Gain 50 max} {heal:Stagger}, {value:plus 200 per SPARK you have}.'
    }
  },
  {
    'id': 'T_SparkofStrength',
    'image': 'https://static.strikr.gg/file/Strikr/awakening/T_SparkofStrength.png',
    'name': {
      en: 'Spark of Strength'
    },
    'description': {
      en: 'SPARK - {buff:Gain 4 Power}, {value:plus 20 per SPARK you have}.'
    }
  },
  {
    'id': 'T_StacksOnStacks',
    'image': 'https://static.strikr.gg/file/Strikr/awakening/T_StacksOnStacks.png',
    'name': {
      en: 'Stacks on Stacks'
    },
    'description': {
      en: '{damage:Hits} grant {value:6 stacks of} {buff:Speed} ({value:0.175% per stack}, {value:2 stacks for LIGHT hits}). At {value:100 stacks}, {buff:double the Speed per stack}.\nStacks reset when K.O.\'d and between sets.'
    }
  },
  {
    'id': 'T_StaggerSwagger',
    'image': 'https://static.strikr.gg/file/Strikr/awakening/T_StaggerSwagger.png',
    'name': {
      en: 'Stagger Swagger'
    },
    'description': {
      en: '{buff:Gain 8% Speed}. While {value:below 50% Stagger}, this effect {value:increases to 20%} and you {heal:heal 150 Stagger per second}, including while in the Staggered state.'
    }
  },
  {
    'id': 'T_Stinger',
    'image': 'https://static.strikr.gg/file/Strikr/awakening/T_Stinger.png',
    'name': {
      en: 'Stinger'
    },
    'description': {
      en: '{damage:Hits} deal {buff:bonus damage} {value:equal to 12%} of enemies\nmax Stagger over {time:2.5s}.'
    }
  },
  {
    'id': 'T_SuperSurge',
    'image': 'https://static.strikr.gg/file/Strikr/awakening/T_SuperSurge.png',
    'name': {
      en: 'Super Surge'
    },
    'description': {
      en: '{skill_type:DASH} {buff:range}, {skill_type:BLINK} {buff:range}, and {buff:HASTE} {value:effects increased 75%}. These abilities {damage:hit} {value:25%} harder ({value:4%} to {core:Core}).'
    }
  },
  {
    'id': 'T_TempoSwings',
    'image': 'https://static.strikr.gg/file/Strikr/awakening/T_TempoSwings.png',
    'name': {
      en: 'Tempo Swings'
    },
    'description': {
      en: 'Hitting anything {heal:heals} you {value:for 4%} of your {heal:max Stagger} ({value:1.33%} for LIGHT hits) and deals that amount as {damage:damage} to the target hit.'
    }
  },
  {
    'id': 'T_TimelessCreator',
    'image': 'https://static.strikr.gg/file/Strikr/awakening/T_TimelessCreator.png',
    'name': {
      en: 'Timeless Creator'
    },
    'description': {
      en: '{skill_type:CREATIONS} gain {value:70% duration} and {value: 50% size}.'
    }
  },
  {
    'id': 'T_TwinDrive',
    'image': 'https://static.strikr.gg/file/Strikr/awakening/T_TwinDrive.png',
    'name': {
      en: 'Twin Drive'
    },
    'description': {
      en: '{skill:SECONDARY} gains {value:+1 charge} and has {value:10%} {buff:reduced cooldown}.'
    }
  }
  ,
  {
    'id': 'T_Unstoppable',
    'image': 'https://static.strikr.gg/file/Strikr/awakening/T_Unstoppable.png',
    'name': {
      en: 'Unstoppable'
    },
    'description': {
      en: 'While not {effect:staggered}, {value:gain 90%} {buff:knockback} {buff:resistance} and {value:10%} {damage_reduction:damage reduction}'
    }
  }
  ,{
    'id': 'T_SpecializedTraining',
    'image': 'https://static.strikr.gg/file/Strikr/awakening/T_SpecializedTraining.png',
    'name': {
      en: 'Specialized Training'
    },
    'description': {
      en: '{skill:SPECIAL} {damage:hits} {value:50% harder} ({value:10% to} {core:Core}) and {heal:heals} {value:50% more}.'
    }
  },
  {
    'id': 'T_Egoist',
    'image': 'https://static.strikr.gg/file/Strikr/awakening/T_Egoist.png',
    'name': {
      en: 'Egoist'
    },
    'description': {
      en: '{skill:Evades} refund {energy:5 Energy} ({value:15 from Energy Bursts}). Reaching max Energy grants {buff:75% Speed} for {time:8s}, reducing to {buff:5% speed} when you remain at max Energy. '
    }
  },
  {
    'id': 'T_FireUp',
    'image': 'https://static.strikr.gg/file/Strikr/awakening/T_FireUp.png',
    'name': {
      en: 'Fire Up'
    },
    'description': {
      en: 'Gain {energy:10 Energy} on round start. Casting {skill:Energy Burst} restores {energy:15% of max Energy} to other allies and {buff:Speeds up your whole team} by {value:40%} for {time:5s}. '
    }
  },
  {
    'id': 'T_Catalyst',
    'image': 'https://static.strikr.gg/file/Strikr/awakening/T_Catalyst.png',
    'name': {
      en: 'Catalyst'
    },
    'description': {
      en: 'Gain {energy:50% more Energy} from {damage:dealing hits}. Being hit generates {energy:3 Energy} ({value:1 for LIGHT hits}).'
    }
  },
  {
    'id': 'T_Reverberation',
    'image': 'https://static.strikr.gg/file/Strikr/awakening/T_Reverberation.png',
    'name': {
      en: 'Reverberation'
    },
    'description': {
      en: 'Gain {value:300} {heal:max Stagger} and [value:.8} {buff:Cooldown Rate} per {value:100 max Stagger}.'
    }
  }
]

export default awakenings