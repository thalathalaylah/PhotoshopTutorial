function CreateProject() {
    var idMk = charIDToTypeID("Mk  ");
    var desc33 = new ActionDescriptor();
    var idNw = charIDToTypeID("Nw  ");
    var desc34 = new ActionDescriptor();
    var idNm = charIDToTypeID("Nm  ");
    desc34.putString(idNm, """test""" );
    var idMd = charIDToTypeID("Md  ");
    var idRGBM = charIDToTypeID("RGBM");
    desc34.putClass(idMd, idRGBM);
    var idWdth = charIDToTypeID("Wdth");
    var idRlt = charIDToTypeID("#Rlt");
    desc34.putUnitDouble(idWdth, idRlt, 2560.000000);
    var idHght = charIDToTypeID("Hght");
    var idRlt = charIDToTypeID("#Rlt");
    desc34.putUnitDouble(idHght, idRlt, 1440.000000);
    var idRslt = charIDToTypeID("Rslt");
    var idRsl = charIDToTypeID("#Rsl");
    desc34.putUnitDouble(idRslt, idRsl, 72.000000);
    var idpixelScaleFactor = stringIDToTypeID("pixelScaleFactor");
    desc34.putDouble(idpixelScaleFactor, 1.000000);
    var idFl = charIDToTypeID("Fl  ");
    var idFl = charIDToTypeID("Fl  ");
    var idWht = charIDToTypeID("Wht ");
    desc34.putEnumerated(idFl, idFl, idWht);
    var idDpth = charIDToTypeID("Dpth");
    desc34.putInteger(idDpth, 8);
    var idprofile = stringIDToTypeID("profile");
    desc34.putString(idprofile, """sRGB IEC61966-2.1""" );
    var idDcmn = charIDToTypeID("Dcmn");
    desc33.putObject(idNw, idDcmn, desc34);
    executeAction(idMk, desc33, DialogModes.NO);
};

function WriteText() {
    // =======================================================
    var idMk = charIDToTypeID("Mk  ");
    var desc38 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref20 = new ActionReference();
    var idTxLr = charIDToTypeID("TxLr");
    ref20.putClass(idTxLr);
    desc38.putReference(idnull, ref20);
    var idUsng = charIDToTypeID("Usng");
    var desc39 = new ActionDescriptor();
    var idTxt = charIDToTypeID("Txt ");
    desc39.putString(idTxt, "Text");
    var idwarp = stringIDToTypeID("warp");
    var desc40 = new ActionDescriptor();
    var idwarpStyle = stringIDToTypeID("warpStyle");
    var idwarpStyle = stringIDToTypeID("warpStyle");
    var idwarpNone = stringIDToTypeID("warpNone");
    desc40.putEnumerated(idwarpStyle, idwarpStyle, idwarpNone);
    var idwarpValue = stringIDToTypeID("warpValue");
    desc40.putDouble(idwarpValue, 0.000000);
    var idwarpPerspective = stringIDToTypeID("warpPerspective");
    desc40.putDouble(idwarpPerspective, 0.000000);
    var idwarpPerspectiveOther = stringIDToTypeID("warpPerspectiveOther");
    desc40.putDouble(idwarpPerspectiveOther, 0.000000);
    var idwarpRotate = stringIDToTypeID("warpRotate");
    var idOrnt = charIDToTypeID("Ornt");
    var idHrzn = charIDToTypeID("Hrzn");
    desc40.putEnumerated(idwarpRotate, idOrnt, idHrzn);
    var idwarp = stringIDToTypeID("warp");
    desc39.putObject(idwarp, idwarp, desc40);
    var idTxtC = charIDToTypeID("TxtC");
    var desc41 = new ActionDescriptor();
    var idHrzn = charIDToTypeID("Hrzn");
    var idPrc = charIDToTypeID("#Prc");
    desc41.putUnitDouble(idHrzn, idPrc, 29.921875);
    var idVrtc = charIDToTypeID("Vrtc");
    var idPrc = charIDToTypeID("#Prc");
    desc41.putUnitDouble(idVrtc, idPrc, 39.444444);
    var idPnt = charIDToTypeID("Pnt ");
    desc39.putObject(idTxtC, idPnt, desc41);
    var idtextGridding = stringIDToTypeID("textGridding");
    var idtextGridding = stringIDToTypeID("textGridding");
    var idNone = charIDToTypeID("None");
    desc39.putEnumerated(idtextGridding, idtextGridding, idNone);
    var idOrnt = charIDToTypeID("Ornt");
    var idOrnt = charIDToTypeID("Ornt");
    var idHrzn = charIDToTypeID("Hrzn");
    desc39.putEnumerated(idOrnt, idOrnt, idHrzn);
    var idAntA = charIDToTypeID("AntA");
    var idAnnt = charIDToTypeID("Annt");
    var idantiAliasSharp = stringIDToTypeID("antiAliasSharp");
    desc39.putEnumerated(idAntA, idAnnt, idantiAliasSharp);
    var idtextShape = stringIDToTypeID("textShape");
    var list5 = new ActionList();
    var desc42 = new ActionDescriptor();
    var idTEXT = charIDToTypeID("TEXT");
    var idTEXT = charIDToTypeID("TEXT");
    var idPnt = charIDToTypeID("Pnt ");
    desc42.putEnumerated(idTEXT, idTEXT, idPnt);
    var idOrnt = charIDToTypeID("Ornt");
    var idOrnt = charIDToTypeID("Ornt");
    var idHrzn = charIDToTypeID("Hrzn");
    desc42.putEnumerated(idOrnt, idOrnt, idHrzn);
    var idTrnf = charIDToTypeID("Trnf");
    var desc43 = new ActionDescriptor();
    var idxx = stringIDToTypeID("xx");
    desc43.putDouble(idxx, 1.000000);
    var idxy = stringIDToTypeID("xy");
    desc43.putDouble(idxy, 0.000000);
    var idyx = stringIDToTypeID("yx");
    desc43.putDouble(idyx, 0.000000);
    var idyy = stringIDToTypeID("yy");
    desc43.putDouble(idyy, 1.000000);
    var idtx = stringIDToTypeID("tx");
    desc43.putDouble(idtx, 0.000000);
    var idty = stringIDToTypeID("ty");
    desc43.putDouble(idty, 0.000000);
    var idTrnf = charIDToTypeID("Trnf");
    desc42.putObject(idTrnf, idTrnf, desc43);
    var idrowCount = stringIDToTypeID("rowCount");
    desc42.putInteger(idrowCount, 1);
    var idcolumnCount = stringIDToTypeID("columnCount");
    desc42.putInteger(idcolumnCount, 1);
    var idrowMajorOrder = stringIDToTypeID("rowMajorOrder");
    desc42.putBoolean(idrowMajorOrder, true);
    var idrowGutter = stringIDToTypeID("rowGutter");
    var idPnt = charIDToTypeID("#Pnt");
    desc42.putUnitDouble(idrowGutter, idPnt, 0.000000);
    var idcolumnGutter = stringIDToTypeID("columnGutter");
    var idPnt = charIDToTypeID("#Pnt");
    desc42.putUnitDouble(idcolumnGutter, idPnt, 0.000000);
    var idSpcn = charIDToTypeID("Spcn");
    var idPnt = charIDToTypeID("#Pnt");
    desc42.putUnitDouble(idSpcn, idPnt, 0.000000);
    var idframeBaselineAlignment = stringIDToTypeID("frameBaselineAlignment");
    var idframeBaselineAlignment = stringIDToTypeID("frameBaselineAlignment");
    var idalignByAscent = stringIDToTypeID("alignByAscent");
    desc42.putEnumerated(idframeBaselineAlignment, idframeBaselineAlignment, idalignByAscent);
    var idfirstBaselineMinimum = stringIDToTypeID("firstBaselineMinimum");
    var idPnt = charIDToTypeID("#Pnt");
    desc42.putUnitDouble(idfirstBaselineMinimum, idPnt, 0.000000);
    var idbase = stringIDToTypeID("base");
    var desc44 = new ActionDescriptor();
    var idHrzn = charIDToTypeID("Hrzn");
    desc44.putDouble(idHrzn, 0.000000);
    var idVrtc = charIDToTypeID("Vrtc");
    desc44.putDouble(idVrtc, 0.000000);
    var idPnt = charIDToTypeID("Pnt ");
    desc42.putObject(idbase, idPnt, desc44);
    var idtextShape = stringIDToTypeID("textShape");
    list5.putObject(idtextShape, desc42);
    desc39.putList(idtextShape, list5);
    var idTxtt = charIDToTypeID("Txtt");
    var list6 = new ActionList();
    var desc45 = new ActionDescriptor();
    var idFrom = charIDToTypeID("From");
    desc45.putInteger(idFrom, 0);
    var idT = charIDToTypeID("T   ");
    desc45.putInteger(idT, 5);
    var idTxtS = charIDToTypeID("TxtS");
    var desc46 = new ActionDescriptor();
    var idstyleSheetHasParent = stringIDToTypeID("styleSheetHasParent");
    desc46.putBoolean(idstyleSheetHasParent, true);
    var idfontPostScriptName = stringIDToTypeID("fontPostScriptName");
    desc46.putString(idfontPostScriptName, """MS-Gothic""" );
    var idFntN = charIDToTypeID("FntN");
    desc46.putString(idFntN, """MS Gothic""" );
    var idFntS = charIDToTypeID("FntS");
    desc46.putString(idFntS, """Regular""" );
    var idScrp = charIDToTypeID("Scrp");
    desc46.putInteger(idScrp, 1);
    var idFntT = charIDToTypeID("FntT");
    desc46.putInteger(idFntT, 1);
    var idSz = charIDToTypeID("Sz  ");
    var idPnt = charIDToTypeID("#Pnt");
    desc46.putUnitDouble(idSz, idPnt, 422.000000);
    var idTxtS = charIDToTypeID("TxtS");
    desc45.putObject(idTxtS, idTxtS, desc46);
    var idTxtt = charIDToTypeID("Txtt");
    list6.putObject(idTxtt, desc45);
    desc39.putList(idTxtt, list6);
    var idparagraphStyleRange = stringIDToTypeID("paragraphStyleRange");
    var list7 = new ActionList();
    var desc47 = new ActionDescriptor();
    var idFrom = charIDToTypeID("From");
    desc47.putInteger(idFrom, 0);
    var idT = charIDToTypeID("T   ");
    desc47.putInteger(idT, 5);
    var idparagraphStyle = stringIDToTypeID("paragraphStyle");
    var desc48 = new ActionDescriptor();
    var idstyleSheetHasParent = stringIDToTypeID("styleSheetHasParent");
    desc48.putBoolean(idstyleSheetHasParent, true);
    var idAlgn = charIDToTypeID("Algn");
    var idAlg = charIDToTypeID("Alg ");
    var idCntr = charIDToTypeID("Cntr");
    desc48.putEnumerated(idAlgn, idAlg, idCntr);
    var idparagraphStyle = stringIDToTypeID("paragraphStyle");
    desc47.putObject(idparagraphStyle, idparagraphStyle, desc48);
    var idparagraphStyleRange = stringIDToTypeID("paragraphStyleRange");
    list7.putObject(idparagraphStyleRange, desc47);
    desc39.putList(idparagraphStyleRange, list7);
    var idkerningRange = stringIDToTypeID("kerningRange");
    var list8 = new ActionList();
    desc39.putList(idkerningRange, list8);
    var idTxLr = charIDToTypeID("TxLr");
    desc38.putObject(idUsng, idTxLr, desc39);
    executeAction(idMk, desc38, DialogModes.NO);
};

function TextAlign() {
    // =======================================================
    var idsetd = charIDToTypeID("setd");
    var desc49 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref21 = new ActionReference();
    var idChnl = charIDToTypeID("Chnl");
    var idfsel = charIDToTypeID("fsel");
    ref21.putProperty(idChnl, idfsel);
    desc49.putReference(idnull, ref21);
    var idT = charIDToTypeID("T   ");
    var idOrdn = charIDToTypeID("Ordn");
    var idAl = charIDToTypeID("Al  ");
    desc49.putEnumerated(idT, idOrdn, idAl);
    executeAction(idsetd, desc49, DialogModes.NO);

    // =======================================================
    var idAlgn = charIDToTypeID("Algn");
    var desc50 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref22 = new ActionReference();
    var idLyr = charIDToTypeID("Lyr ");
    var idOrdn = charIDToTypeID("Ordn");
    var idTrgt = charIDToTypeID("Trgt");
    ref22.putEnumerated(idLyr, idOrdn, idTrgt);
    desc50.putReference(idnull, ref22);
    var idUsng = charIDToTypeID("Usng");
    var idADSt = charIDToTypeID("ADSt");
    var idAdCV = charIDToTypeID("AdCV");
    desc50.putEnumerated(idUsng, idADSt, idAdCV);
    executeAction(idAlgn, desc50, DialogModes.NO);

    // =======================================================
    var idAlgn = charIDToTypeID("Algn");
    var desc51 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref23 = new ActionReference();
    var idLyr = charIDToTypeID("Lyr ");
    var idOrdn = charIDToTypeID("Ordn");
    var idTrgt = charIDToTypeID("Trgt");
    ref23.putEnumerated(idLyr, idOrdn, idTrgt);
    desc51.putReference(idnull, ref23);
    var idUsng = charIDToTypeID("Usng");
    var idADSt = charIDToTypeID("ADSt");
    var idAdCH = charIDToTypeID("AdCH");
    desc51.putEnumerated(idUsng, idADSt, idAdCH);
    executeAction(idAlgn, desc51, DialogModes.NO);
};

function TextRasterize() {
    // =======================================================
    var idsetd = charIDToTypeID("setd");
    var desc52 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref24 = new ActionReference();
    var idChnl = charIDToTypeID("Chnl");
    var idfsel = charIDToTypeID("fsel");
    ref24.putProperty(idChnl, idfsel);
    desc52.putReference(idnull, ref24);
    var idT = charIDToTypeID("T   ");
    var idOrdn = charIDToTypeID("Ordn");
    var idNone = charIDToTypeID("None");
    desc52.putEnumerated(idT, idOrdn, idNone);
    executeAction(idsetd, desc52, DialogModes.NO);

    // =======================================================
    var idrasterizeLayer = stringIDToTypeID("rasterizeLayer");
    var desc53 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref25 = new ActionReference();
    var idLyr = charIDToTypeID("Lyr ");
    var idOrdn = charIDToTypeID("Ordn");
    var idTrgt = charIDToTypeID("Trgt");
    ref25.putEnumerated(idLyr, idOrdn, idTrgt);
    desc53.putReference(idnull, ref25);
    var idWhat = charIDToTypeID("What");
    var idrasterizeItem = stringIDToTypeID("rasterizeItem");
    var idType = charIDToTypeID("Type");
    desc53.putEnumerated(idWhat, idrasterizeItem, idType);
    executeAction(idrasterizeLayer, desc53, DialogModes.NO);
};

function MakeChannel() {
    // =======================================================
    var idsetd = charIDToTypeID("setd");
    var desc54 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref26 = new ActionReference();
    var idChnl = charIDToTypeID("Chnl");
    var idfsel = charIDToTypeID("fsel");
    ref26.putProperty(idChnl, idfsel);
    desc54.putReference(idnull, ref26);
    var idT = charIDToTypeID("T   ");
    var ref27 = new ActionReference();
    var idChnl = charIDToTypeID("Chnl");
    var idChnl = charIDToTypeID("Chnl");
    var idTrsp = charIDToTypeID("Trsp");
    ref27.putEnumerated(idChnl, idChnl, idTrsp);
    desc54.putReference(idT, ref27);
    executeAction(idsetd, desc54, DialogModes.NO);

    // =======================================================
    var idDplc = charIDToTypeID("Dplc");
    var desc55 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref28 = new ActionReference();
    var idChnl = charIDToTypeID("Chnl");
    var idfsel = charIDToTypeID("fsel");
    ref28.putProperty(idChnl, idfsel);
    desc55.putReference(idnull, ref28);
    var idNm = charIDToTypeID("Nm  ");
    desc55.putString(idNm, """alpha1""" );
    executeAction(idDplc, desc55, DialogModes.NO);
};

function FillColor(color) {
    // =======================================================
    var idFl = charIDToTypeID("Fl  ");
    var desc56 = new ActionDescriptor();
    var idUsng = charIDToTypeID("Usng");
    var idFlCn = charIDToTypeID("FlCn");
    var idWht = charIDToTypeID(color);
    desc56.putEnumerated(idUsng, idFlCn, idWht);
    var idOpct = charIDToTypeID("Opct");
    var idPrc = charIDToTypeID("#Prc");
    desc56.putUnitDouble(idOpct, idPrc, 100.000000);
    var idMd = charIDToTypeID("Md  ");
    var idBlnM = charIDToTypeID("BlnM");
    var idMltp = charIDToTypeID("Mltp");
    desc56.putEnumerated(idMd, idBlnM, idMltp);
    executeAction(idFl, desc56, DialogModes.NO);
};

function GaussianBlur() {
    // =======================================================
    var idsetd = charIDToTypeID("setd");
    var desc57 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref29 = new ActionReference();
    var idChnl = charIDToTypeID("Chnl");
    var idfsel = charIDToTypeID("fsel");
    ref29.putProperty(idChnl, idfsel);
    desc57.putReference(idnull, ref29);
    var idT = charIDToTypeID("T   ");
    var idOrdn = charIDToTypeID("Ordn");
    var idNone = charIDToTypeID("None");
    desc57.putEnumerated(idT, idOrdn, idNone);
    executeAction(idsetd, desc57, DialogModes.NO);

    // =======================================================
    var idFl = charIDToTypeID("Fl  ");
    var desc58 = new ActionDescriptor();
    var idUsng = charIDToTypeID("Usng");
    var idFlCn = charIDToTypeID("FlCn");
    var idWht = charIDToTypeID("Wht ");
    desc58.putEnumerated(idUsng, idFlCn, idWht);
    var idOpct = charIDToTypeID("Opct");
    var idPrc = charIDToTypeID("#Prc");
    desc58.putUnitDouble(idOpct, idPrc, 100.000000);
    var idMd = charIDToTypeID("Md  ");
    var idBlnM = charIDToTypeID("BlnM");
    var idMltp = charIDToTypeID("Mltp");
    desc58.putEnumerated(idMd, idBlnM, idMltp);
    executeAction(idFl, desc58, DialogModes.NO);

    // =======================================================
    var idGsnB = charIDToTypeID("GsnB");
    var desc59 = new ActionDescriptor();
    var idRds = charIDToTypeID("Rds ");
    var idPxl = charIDToTypeID("#Pxl");
    desc59.putUnitDouble(idRds, idPxl, 10.000000);
    executeAction(idGsnB, desc59, DialogModes.NO);
};

function Solarization() {
    // =======================================================
    var idSlrz = charIDToTypeID("Slrz");
    executeAction(idSlrz, undefined, DialogModes.NO);
};

function LevelControl() {
    // =======================================================
    var idLvls = charIDToTypeID("Lvls");
    var desc60 = new ActionDescriptor();
    var idpresetKind = stringIDToTypeID("presetKind");
    var idpresetKindType = stringIDToTypeID("presetKindType");
    var idpresetKindCustom = stringIDToTypeID("presetKindCustom");
    desc60.putEnumerated(idpresetKind, idpresetKindType, idpresetKindCustom);
    var idAdjs = charIDToTypeID("Adjs");
    var list9 = new ActionList();
    var desc61 = new ActionDescriptor();
    var idChnl = charIDToTypeID("Chnl");
    var ref30 = new ActionReference();
    var idChnl = charIDToTypeID("Chnl");
    var idChnl = charIDToTypeID("Chnl");
    var idCmps = charIDToTypeID("Cmps");
    ref30.putEnumerated(idChnl, idChnl, idCmps);
    desc61.putReference(idChnl, ref30);
    var idInpt = charIDToTypeID("Inpt");
    var list10 = new ActionList();
    list10.putInteger(0);
    list10.putInteger(128);
    desc61.putList(idInpt, list10);
    var idLvlA = charIDToTypeID("LvlA");
    list9.putObject(idLvlA, desc61);
    desc60.putList(idAdjs, list9);
    executeAction(idLvls, desc60, DialogModes.NO);
};

function CopyTextLayer() {
    // =======================================================
    var idDplc = charIDToTypeID("Dplc");
    var desc62 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref31 = new ActionReference();
    var idLyr = charIDToTypeID("Lyr ");
    var idOrdn = charIDToTypeID("Ordn");
    var idTrgt = charIDToTypeID("Trgt");
    ref31.putEnumerated(idLyr, idOrdn, idTrgt);
    desc62.putReference(idnull, ref31);
    var idNm = charIDToTypeID("Nm  ");
    desc62.putString(idNm, """copy""" );
    var idVrsn = charIDToTypeID("Vrsn");
    desc62.putInteger(idVrsn, 5);
    executeAction(idDplc, desc62, DialogModes.NO);
};

function PolarCoordinateConversion(conversionType) {
    // =======================================================
    var idPlr = charIDToTypeID("Plr ");
    var desc63 = new ActionDescriptor();
    var idCnvr = charIDToTypeID("Cnvr");
    var idCnvr = charIDToTypeID("Cnvr");
    var idPlrR = charIDToTypeID(conversionType);
    desc63.putEnumerated(idCnvr, idCnvr, idPlrR);
    executeAction(idPlr, desc63, DialogModes.NO);
};

function Rotate(angle) {
    // =======================================================
    var idRtte = charIDToTypeID("Rtte");
    var desc64 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref32 = new ActionReference();
    var idDcmn = charIDToTypeID("Dcmn");
    var idOrdn = charIDToTypeID("Ordn");
    var idFrst = charIDToTypeID("Frst");
    ref32.putEnumerated(idDcmn, idOrdn, idFrst);
    desc64.putReference(idnull, ref32);
    var idAngl = charIDToTypeID("Angl");
    var idAng = charIDToTypeID("#Ang");
    desc64.putUnitDouble(idAngl, idAng, angle);
    executeAction(idRtte, desc64, DialogModes.NO);
};

function AdjustmentInvert() {
    // =======================================================
    var idInvr = charIDToTypeID("Invr");
    executeAction(idInvr, undefined, DialogModes.NO);
};

function WindFilter() {
    // =======================================================
    var idWnd = charIDToTypeID("Wnd ");
    var desc65 = new ActionDescriptor();
    var idWndM = charIDToTypeID("WndM");
    var idWndM = charIDToTypeID("WndM");
    var idWnd = charIDToTypeID("Wnd ");
    desc65.putEnumerated(idWndM, idWndM, idWnd);
    var idDrct = charIDToTypeID("Drct");
    var idDrct = charIDToTypeID("Drct");
    var idLeft = charIDToTypeID("Left");
    desc65.putEnumerated(idDrct, idDrct, idLeft);
    executeAction(idWnd, desc65, DialogModes.NO);
};

function LayerModeScreen() {
   // =======================================================
    var idsetd = charIDToTypeID("setd");
    var desc73 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref34 = new ActionReference();
    var idLyr = charIDToTypeID("Lyr ");
    var idOrdn = charIDToTypeID("Ordn");
    var idTrgt = charIDToTypeID("Trgt");
    ref34.putEnumerated(idLyr, idOrdn, idTrgt);
    desc73.putReference(idnull, ref34);
    var idT = charIDToTypeID("T   ");
    var desc74 = new ActionDescriptor();
    var idMd = charIDToTypeID("Md  ");
    var idBlnM = charIDToTypeID("BlnM");
    var idScrn = charIDToTypeID("Scrn");
    desc74.putEnumerated(idMd, idBlnM, idScrn);
    var idLyr = charIDToTypeID("Lyr ");
    desc73.putObject(idT, idLyr, desc74);
    executeAction(idsetd, desc73, DialogModes.NO);
};

function AddGradationLayer() {
    // =======================================================
    var idMk = charIDToTypeID("Mk  ");
    var desc75 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref35 = new ActionReference();
    var idcontentLayer = stringIDToTypeID("contentLayer");
    ref35.putClass(idcontentLayer);
    desc75.putReference(idnull, ref35);
    var idUsng = charIDToTypeID("Usng");
    var desc76 = new ActionDescriptor();
    var idType = charIDToTypeID("Type");
    var desc77 = new ActionDescriptor();
    var idAngl = charIDToTypeID("Angl");
    var idAng = charIDToTypeID("#Ang");
    desc77.putUnitDouble(idAngl, idAng, 90.000000);
    var idType = charIDToTypeID("Type");
    var idGrdT = charIDToTypeID("GrdT");
    var idLnr = charIDToTypeID("Lnr ");
    desc77.putEnumerated(idType, idGrdT, idLnr);
    var idGrad = charIDToTypeID("Grad");
    var desc78 = new ActionDescriptor();
    var idNm = charIDToTypeID("Nm  ");
    desc78.putString(idNm, """$$$/DefaultGradient/BlueRedYellow=Blue, Red, Yellow""" );
    var idGrdF = charIDToTypeID("GrdF");
    var idGrdF = charIDToTypeID("GrdF");
    var idCstS = charIDToTypeID("CstS");
    desc78.putEnumerated(idGrdF, idGrdF, idCstS);
    var idIntr = charIDToTypeID("Intr");
    desc78.putDouble(idIntr, 4096.000000);
    var idClrs = charIDToTypeID("Clrs");
    var list11 = new ActionList();
    var desc79 = new ActionDescriptor();
    var idClr = charIDToTypeID("Clr ");
    var desc80 = new ActionDescriptor();
    var idRd = charIDToTypeID("Rd  ");
    desc80.putDouble(idRd, 9.571985);
    var idGrn = charIDToTypeID("Grn ");
    desc80.putDouble(idGrn, 0.000000);
    var idBl = charIDToTypeID("Bl  ");
    desc80.putDouble(idBl, 178.000005);
    var idRGBC = charIDToTypeID("RGBC");
    desc79.putObject(idClr, idRGBC, desc80);
    var idType = charIDToTypeID("Type");
    var idClry = charIDToTypeID("Clry");
    var idUsrS = charIDToTypeID("UsrS");
    desc79.putEnumerated(idType, idClry, idUsrS);
    var idLctn = charIDToTypeID("Lctn");
    desc79.putInteger(idLctn, 0);
    var idMdpn = charIDToTypeID("Mdpn");
    desc79.putInteger(idMdpn, 50);
    var idClrt = charIDToTypeID("Clrt");
    list11.putObject(idClrt, desc79);
    var desc81 = new ActionDescriptor();
    var idClr = charIDToTypeID("Clr ");
    var desc82 = new ActionDescriptor();
    var idRd = charIDToTypeID("Rd  ");
    desc82.putDouble(idRd, 255.000000);
    var idGrn = charIDToTypeID("Grn ");
    desc82.putDouble(idGrn, 0.000000);
    var idBl = charIDToTypeID("Bl  ");
    desc82.putDouble(idBl, 0.023346);
    var idRGBC = charIDToTypeID("RGBC");
    desc81.putObject(idClr, idRGBC, desc82);
    var idType = charIDToTypeID("Type");
    var idClry = charIDToTypeID("Clry");
    var idUsrS = charIDToTypeID("UsrS");
    desc81.putEnumerated(idType, idClry, idUsrS);
    var idLctn = charIDToTypeID("Lctn");
    desc81.putInteger(idLctn, 2048);
    var idMdpn = charIDToTypeID("Mdpn");
    desc81.putInteger(idMdpn, 50);
    var idClrt = charIDToTypeID("Clrt");
    list11.putObject(idClrt, desc81);
    var desc83 = new ActionDescriptor();
    var idClr = charIDToTypeID("Clr ");
    var desc84 = new ActionDescriptor();
    var idRd = charIDToTypeID("Rd  ");
    desc84.putDouble(idRd, 255.000000);
    var idGrn = charIDToTypeID("Grn ");
    desc84.putDouble(idGrn, 252.000000);
    var idBl = charIDToTypeID("Bl  ");
    desc84.putDouble(idBl, 0.000000);
    var idRGBC = charIDToTypeID("RGBC");
    desc83.putObject(idClr, idRGBC, desc84);
    var idType = charIDToTypeID("Type");
    var idClry = charIDToTypeID("Clry");
    var idUsrS = charIDToTypeID("UsrS");
    desc83.putEnumerated(idType, idClry, idUsrS);
    var idLctn = charIDToTypeID("Lctn");
    desc83.putInteger(idLctn, 4096);
    var idMdpn = charIDToTypeID("Mdpn");
    desc83.putInteger(idMdpn, 50);
    var idClrt = charIDToTypeID("Clrt");
    list11.putObject(idClrt, desc83);
    desc78.putList(idClrs, list11);
    var idTrns = charIDToTypeID("Trns");
    var list12 = new ActionList();
    var desc85 = new ActionDescriptor();
    var idOpct = charIDToTypeID("Opct");
    var idPrc = charIDToTypeID("#Prc");
    desc85.putUnitDouble(idOpct, idPrc, 100.000000);
    var idLctn = charIDToTypeID("Lctn");
    desc85.putInteger(idLctn, 0);
    var idMdpn = charIDToTypeID("Mdpn");
    desc85.putInteger(idMdpn, 50);
    var idTrnS = charIDToTypeID("TrnS");
    list12.putObject(idTrnS, desc85);
    var desc86 = new ActionDescriptor();
    var idOpct = charIDToTypeID("Opct");
    var idPrc = charIDToTypeID("#Prc");
    desc86.putUnitDouble(idOpct, idPrc, 100.000000);
    var idLctn = charIDToTypeID("Lctn");
    desc86.putInteger(idLctn, 4096);
    var idMdpn = charIDToTypeID("Mdpn");
    desc86.putInteger(idMdpn, 50);
    var idTrnS = charIDToTypeID("TrnS");
    list12.putObject(idTrnS, desc86);
    desc78.putList(idTrns, list12);
    var idGrdn = charIDToTypeID("Grdn");
    desc77.putObject(idGrad, idGrdn, desc78);
    var idgradientLayer = stringIDToTypeID("gradientLayer");
    desc76.putObject(idType, idgradientLayer, desc77);
    var idcontentLayer = stringIDToTypeID("contentLayer");
    desc75.putObject(idUsng, idcontentLayer, desc76);
    executeAction(idMk, desc75, DialogModes.NO);
};

function RadialBlur() {
    // =======================================================
    var idsetd = charIDToTypeID("setd");
    var desc87 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref36 = new ActionReference();
    var idLyr = charIDToTypeID("Lyr ");
    var idOrdn = charIDToTypeID("Ordn");
    var idTrgt = charIDToTypeID("Trgt");
    ref36.putEnumerated(idLyr, idOrdn, idTrgt);
    desc87.putReference(idnull, ref36);
    var idT = charIDToTypeID("T   ");
    var desc88 = new ActionDescriptor();
    var idMd = charIDToTypeID("Md  ");
    var idBlnM = charIDToTypeID("BlnM");
    var idClr = charIDToTypeID("Clr ");
    desc88.putEnumerated(idMd, idBlnM, idClr);
    var idLyr = charIDToTypeID("Lyr ");
    desc87.putObject(idT, idLyr, desc88);
    executeAction(idsetd, desc87, DialogModes.NO);

    // =======================================================
    var idslct = charIDToTypeID("slct");
    var desc89 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref37 = new ActionReference();
    var idLyr = charIDToTypeID("Lyr ");
    ref37.putName(idLyr, "Text");
    desc89.putReference(idnull, ref37);
    var idMkVs = charIDToTypeID("MkVs");
    desc89.putBoolean(idMkVs, false);
    executeAction(idslct, desc89, DialogModes.NO);

    // =======================================================
    var idRdlB = charIDToTypeID("RdlB");
    var desc90 = new ActionDescriptor();
    var idAmnt = charIDToTypeID("Amnt");
    desc90.putInteger(idAmnt, 10);
    var idBlrM = charIDToTypeID("BlrM");
    var idBlrM = charIDToTypeID("BlrM");
    var idZm = charIDToTypeID("Zm  ");
    desc90.putEnumerated(idBlrM, idBlrM, idZm);
    var idBlrQ = charIDToTypeID("BlrQ");
    var idBlrQ = charIDToTypeID("BlrQ");
    var idBst = charIDToTypeID("Bst ");
    desc90.putEnumerated(idBlrQ, idBlrQ, idBst);
    executeAction(idRdlB, desc90, DialogModes.NO);
};

function LoadChannelSelection() {
    // =======================================================
    var idsetd = charIDToTypeID("setd");
    var desc91 = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var ref38 = new ActionReference();
    var idChnl = charIDToTypeID("Chnl");
    var idfsel = charIDToTypeID("fsel");
    ref38.putProperty(idChnl, idfsel);
    desc91.putReference(idnull, ref38);
    var idT = charIDToTypeID("T   ");
    var ref39 = new ActionReference();
    var idChnl = charIDToTypeID("Chnl");
    ref39.putName(idChnl, "alpha1");
    desc91.putReference(idT, ref39);
    executeAction(idsetd, desc91, DialogModes.NO);
};

function SavePNG() {
    // =======================================================
    var idsave = charIDToTypeID("save");
    var desc95 = new ActionDescriptor();
    var idAs = charIDToTypeID("As  ");
    var desc96 = new ActionDescriptor();
    var idPGIT = charIDToTypeID("PGIT");
    var idPGIT = charIDToTypeID("PGIT");
    var idPGIN = charIDToTypeID("PGIN");
    desc96.putEnumerated(idPGIT, idPGIT, idPGIN);
    var idPNGf = charIDToTypeID("PNGf");
    var idPNGf = charIDToTypeID("PNGf");
    var idPGAd = charIDToTypeID("PGAd");
    desc96.putEnumerated(idPNGf, idPNGf, idPGAd);
    var idCmpr = charIDToTypeID("Cmpr");
    desc96.putInteger(idCmpr, 9);
    var idPNGF = charIDToTypeID("PNGF");
    desc95.putObject(idAs, idPNGF, desc96);
    var idIn = charIDToTypeID("In  ");
    desc95.putPath(idIn, new File("G:\\Project\\PhotoshopTutorialAutomation\\test.png"));
    var idDocI = charIDToTypeID("DocI");
    desc95.putInteger(idDocI, 1289);
    var idCpy = charIDToTypeID("Cpy ");
    desc95.putBoolean(idCpy, true);
    var idAlpC = charIDToTypeID("AlpC");
    desc95.putBoolean(idAlpC, false);
    var idsaveStage = stringIDToTypeID("saveStage");
    var idsaveStageType = stringIDToTypeID("saveStageType");
    var idsaveBegin = stringIDToTypeID("saveBegin");
    desc95.putEnumerated(idsaveStage, idsaveStageType, idsaveBegin);
    executeAction(idsave, desc95, DialogModes.NO);
};

function CloseProject() {
    // =======================================================
    var idCls = charIDToTypeID("Cls ");
    var desc2 = new ActionDescriptor();
    var idSvng = charIDToTypeID("Svng");
    var idYsN = charIDToTypeID("YsN ");
    var idN = charIDToTypeID("N   ");
    desc2.putEnumerated(idSvng, idYsN, idN);
    executeAction(idCls, desc2, DialogModes.NO);
};