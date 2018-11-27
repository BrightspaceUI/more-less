import '../@polymer/polymer/polymer-legacy.js';
import '../d2l-localize-behavior/d2l-localize-behavior.js';
window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};
window.D2L.PolymerBehaviors.MoreLess = window.D2L.PolymerBehaviors.MoreLess || {};

/**
 * Localizes the more-less component.
 * @polymerBehavior D2L.PolymerBehaviors.MoreLess.LocalizeBehavior
 */
D2L.PolymerBehaviors.MoreLess.LocalizeBehaviorImpl = {
	properties: {
	/**
	 * Localization resources.
	 */
		resources: {
			value: function() {
				return {
					'ar': {
						more: 'المزيد',
						less: 'أقل'
					},
					'en': {
						more: 'more',
						less: 'less'
					},
					'es': {
						more: 'más',
						less: 'menos'
					},
					'fr': {
						more: 'plus',
						less: 'moins'
					},
					'ja': {
						more: 'より多い',
						less: 'より少ない'
					},
					'ko': {
						more: '더 보기',
						less: '축소'
					},
					'nl': {
						more: 'meer',
						less: 'minder'
					},
					'pt': {
						more: 'mais',
						less: 'menos'
					},
					'sv': {
						more: 'mer',
						less: 'mindre'
					},
					'tr': {
						more: 'diğer',
						less: 'daha az'
					},
					'zh': {
						more: '更多',
						less: '更少'
					},
					'zh-tw': {
						more: '較多',
						less: '較少'
					}
				};
			}
		}
	}
};

/** @polymerBehavior D2L.PolymerBehaviors.MoreLess.LocalizeBehavior */
D2L.PolymerBehaviors.MoreLess.LocalizeBehavior = [
	D2L.PolymerBehaviors.LocalizeBehavior,
	D2L.PolymerBehaviors.MoreLess.LocalizeBehaviorImpl
];
