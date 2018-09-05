var PneumaticFittings = {
	OneTouchFittings: ["PC", "PL", "PT", "PST", "PCF", "PWT", "PMF", "PLF", "PUC", "PUL",
	"PUT", "PY", "PG", "PUG", "PW", "PZA", "PMM", "PPM", "PCP", "PP",
	"PPF"],
	SpeedControllers: ["NSE", "NSS", "NSF", "NSL", "NSP"],
	RotaryJoints: ["NRC", "NRL", "NHRC", "NHRL"],
	StopFittings: ["SPC", "SPU", "SPL"],
	CheckValves: ["PCVC", "PCVF", "PCVU"],
	BallValves: ["BUC", "BUG", "BL", "BC"],
	HandValves: ["HVSS", "HVFS", "HVFF", "HVSF", "HSV(M)"],
	TwoTouchFittings: ["TC", "TL", "TUT", "IC", "IL", "IT", "IUC", "IUL", "IUT", "INUT", "IMS", "INS"],
	Silencers: ["ST", "ST(M)", "SL", "SM", "SBC"]
};

var HydraulicFittings = {//첫번째거 BMC => BMC-R
	BiteTypeFittings: ["BMC-R", "BLM", "BU", "BL", "BT", "BC", "BBU", "BOM", "BMC-G", "BOLM",
	"BSLM", "BBTM", "BRTM", "BFC", "BGC", "BLF", "BBTF", "BHUM", "BHUF", "BCW",
	"BBUW", "BA-R", "BR", "BLA", "BBTA", "BRTA", "BAP-2"],
	HydraulicHoseFittings: ["SNA", "SNB", "SNC", "SND", "SNE", "SBHU-U", "SBHU-G", "SNF", "SNF-G", "SNG",
	"EWA", "EWB", "EWC", "EWD", "ELA", "ELLA", "ELB", "ELLB", "ELC", "ELD",
	"ELE", "UT", "RT", "MBT", "OBA", "OBAE", "OBC", "EOC", "EWOA", "EWOB",
	"EWOC", "ELOA", "ELOB", "ELOC", "SMT", "SNS", "SME", "ELS", "RTS", "BTS",
	"SCA", "SP", "PA", "PB", "PC", "SPA", "SPB", "SPC", "BPP"],
	HydraulicPipeFittings: ["SWLA", "SWTA", "SWTB", "SWXA", "SWFC", "SWHC", "SWRC", "SWBA", "SWCA", "SWUA",
	"SWMC-R", "SWMC-G", "SLD", "SLE", "STB", "SSB", "SLA", "SLB", "SLC", "STA",
	"SFC", "SHC", "SRC", "SCA", "SSA", "SSR", "SBA", "SPA", "SPB", "SPC",
	"SPD", "SHB", "SUA", "MFAA", "MFAB", "MFAE", "MFAC", "MFAD"],
	LockFittings: ["CUA", "CUR", "CLA", "CTA", "CXA", "CBU", "CMC-N", "CMC-R", "CMC-G", "CLMA",
	"CRTM", "CBTM", "CFC", "CGC", "CBFC", "CLF", "CRTF", "CBTF", "CR", "CAL",
	"CRTA", "CBTA", "CAM", "CAF", "CPA", "CCA", "CI", "CIG", "CN", "CFF",
	"CFB"],
	DinFittings: ["HMC-R", "HFC-G", "HLM-RM", "HU", "HUR", "HBU", "HL", "HT", "HC", "HOM-GED",
	"HRED", "HEGE-G", "HUE", "HEW", "HET", "HEL", "HR", "HKOR", "HAK", "HSWVE-GM",
	"HFAD-ED", "HFAE-ED", "HVKA", "HCA", "HN", "HS"]
};

var BrassFittings = {
	MechPart: []
};//기계부속은 숫자로 카운트

var Tube = {
	PolyurethaneTube: [],
	NylonTube: [],
	SeamlessTube: [],
	CopperTube: []

};

var Coupler = {
	AirCoupler: ["MHH", "MHM", "MHF", "MHN-S", "MCH", "MCM", "MCF", "MCN-S", "MLY", "MLW",
	"MLR"],
	MoldCoupler: ["KHH", "KHM", "KHF", "KCH", "KCM", "KCF"],
	KNCoupler: ["SERISE 20", "SERISE 30", "SERISE 40", "SERISE 300", "SERISE 500", "SERISE 900C", "SERISE 900X", "SERISE 900", "SAFETY SERISE", "역화방지기",
	"SPECIAL1", "SPECIAL2", "NIPPLE", "HI-NIPPLE", "MANIFOLD1", "MANIFOLD2", "WORKING LINE"],
	HydraulicCoupler: ["KCA", "KCN"],
	SPCoupler: ["KCB"],
	TSPCoupler: [],
	CamLock: ["C-TYPE", "B-TYPE", "D-TYPE", "DC-TYPE", "E-TYPE", "F-TYPE", "A-TYPE", "DP-TYPE"]
};

var Clamps = {
	HoseBand: ["MINI HOSE BAND", "HOSE BAND"],
	BreezeBand: [],
	HighPressureBand: ["DOUBLE BAND", "SINGLE BAND"],
	PipeClamp: ["HEAVY TYPE", "STANDARD TYPE", "MULTILINE TYPE1", "MULTILINE TYPE2", "FIX CLAMPS"]
};

var AnythingElse = {
	AirGrinder: [],
	Wielding: [],
	AirGun: []
};

/*
console.log(PneumaticFittings.OneTouchFittings.length);
console.log(PneumaticFittings.SpeedControllers.length);
console.log(PneumaticFittings.RotaryJoints.length);
console.log(PneumaticFittings.StopFittings.length);
console.log(PneumaticFittings.CheckValves.length);
console.log(PneumaticFittings.BallValves.length);
console.log(PneumaticFittings.HandValves.length);
console.log(PneumaticFittings.TwoTouchFittings.length);
console.log(PneumaticFittings.Silencers.length);
*/