const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Behaviors.scrollto,
		C3.Behaviors.Platform,
		C3.Behaviors.bound,
		C3.Plugins.Keyboard,
		C3.Plugins.Text,
		C3.Plugins.Mouse,
		C3.Behaviors.Anchor,
		C3.Plugins.Audio,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Mouse.Cnds.OnClick,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.ResetGlobals,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.Keyboard.Cnds.OnKeyReleased,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.System.Cnds.Else,
		C3.Behaviors.Platform.Cnds.IsFalling,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Audio.Acts.Play
	];
};
self.C3_JsPropNameTable = [
	{PlanoDeFundoEmBlocos: 0},
	{Sólido: 0},
	{chao: 0},
	{plataforma: 0},
	{CentrarEm: 0},
	{Plataforma: 0},
	{RestritoAoLayout: 0},
	{jogador: 0},
	{açao: 0},
	{inimigo1: 0},
	{Teclado: 0},
	{marcador: 0},
	{PlanoDeFundoEmBlocos2: 0},
	{tituloJogo: 0},
	{Mouse: 0},
	{jogarTelainicio: 0},
	{PlanoDeFundoEmBlocos3: 0},
	{historia: 0},
	{Âncora: 0},
	{txtvida: 0},
	{Texto2: 0},
	{portal: 0},
	{Áudio: 0},
	{Sprite: 0},
	{Sprite2: 0},
	{Texto3: 0},
	{JOGARNOVAMENTE: 0},
	{INICIO: 0},
	{vidas2: 0},
	{vidas: 0}
];

self.InstanceType = {
	PlanoDeFundoEmBlocos: class extends self.ITiledBackgroundInstance {},
	chao: class extends self.ISpriteInstance {},
	plataforma: class extends self.ISpriteInstance {},
	jogador: class extends self.ISpriteInstance {},
	inimigo1: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {},
	marcador: class extends self.ISpriteInstance {},
	PlanoDeFundoEmBlocos2: class extends self.ITiledBackgroundInstance {},
	tituloJogo: class extends self.ITextInstance {},
	Mouse: class extends self.IInstance {},
	jogarTelainicio: class extends self.ITextInstance {},
	PlanoDeFundoEmBlocos3: class extends self.ITiledBackgroundInstance {},
	historia: class extends self.ITextInstance {},
	txtvida: class extends self.ITextInstance {},
	Texto2: class extends self.ITextInstance {},
	portal: class extends self.ISpriteInstance {},
	Áudio: class extends self.IInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Texto3: class extends self.ITextInstance {},
	JOGARNOVAMENTE: class extends self.ITextInstance {},
	INICIO: class extends self.ITextInstance {}
}