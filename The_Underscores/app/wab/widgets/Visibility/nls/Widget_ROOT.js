// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"dgrid/extensions/nls/pagination":{status:"${start} - ${end} of ${total} results",gotoFirst:"Go to first page",gotoNext:"Go to next page",gotoPrev:"Go to previous page",gotoLast:"Go to last page",gotoPage:"Go to page",jumpPage:"Jump to page",rowsPerPage:"Number of rows per page",_localized:{ar:1,cs:1,da:1,de:1,es:1,et:1,fi:1,fr:1,he:1,hi:1,it:1,ja:1,ko:1,lt:1,lv:1,nb:1,nl:1,pl:1,pt:1,"pt-br":1,"pt-pt":1,ro:1,ru:1,sk:1,sl:1,sv:1,th:1,tr:1,"zh-cn":1,"zh-hk":1,"zh-tw":1}},"esri/dijit/analysis/nls/DataStoreSelect":{relationalDS:"Relational",
spatialDS:"Spatiotemporal",agsDataStore:"ArcGIS Data Store",bdfsTemplates:"Big Data File Share Output Templates",_localized:{ar:1,bs:1,ca:1,cs:1,da:1,de:1,el:1,es:1,et:1,fi:1,fr:1,he:1,hr:1,hu:1,id:1,it:1,ja:1,ko:1,lt:1,lv:1,nb:1,nl:1,pl:1,"pt-br":1,"pt-pt":1,ro:1,ru:1,sl:1,sr:1,sv:1,th:1,tr:1,uk:1,vi:1,"zh-cn":1,"zh-hk":1,"zh-tw":1}},"esri/dijit/analysis/nls/BrowseLayerMixin":{defaultAnaysisLayerTitle:"Choose Living Atlas Analysis Layer",customAnalysisLayerTitle:"Choose Analysis Layer",searchPlaceholderText:"Search Living Atlas analysis layers",
searchCustomPlaceholderText:"Search analysis layers",mainActionTitle:"Select",customActionName:"Select and add to map",customeSectionName:"Living Atlas Analysis Layers",Categories:"Categories",boundaries:"Boundaries",places:"Places",boundariesAndPlaces:"Boundaries and Places",hexbins:"Hexbins",transportation:"Transportation",point:"Point Layers",line:"Polyline Layers",polygon:"Polygon Layers",pointFilterName:"Point",lineFilterName:"Polyline",polygonFilterName:"Polygon",multiPointFilterName:"Multi Points",
geometryFilterName:"Geometry",featureLayerName:"Feature Layer",tableLayerName:"Table",itemTypeFilterName:"Item type",instantFilterName:"Instant",intervalFilterName:"Interval",timeFilterName:"Time",edit:"Edit",boundaryLayers:"Esri Boundary Layers",customAnalysisGroupName:"Organization Analysis Group",_localized:{ar:1,bs:1,ca:1,cs:1,da:1,de:1,el:1,es:1,et:1,fi:1,fr:1,he:1,hr:1,hu:1,id:1,it:1,ja:1,ko:1,lt:1,lv:1,nb:1,nl:1,pl:1,"pt-br":1,"pt-pt":1,ro:1,ru:1,sl:1,sr:1,sv:1,th:1,tr:1,uk:1,vi:1,"zh-cn":1,
"zh-hk":1,"zh-tw":1}},"widgets/Visibility/nls/strings":{_widgetLabel:"Visibility",observerLocation:"Observer Location",formatIconTooltip:"Format Input",addPointToolTip:"Add Observer Location",fieldOfView:"Field of View",useMilsText:"Use mils for angles",observerHeight:"Observer Height",minObsDistance:"Min Observable Distance",maxObsDistance:"Max Observable Distance",taskURLError:"The widget configuration file contains a URL that is unreachable. Please check with your system administrator",taskURLInvalid:"The geoprocessing task configured with this widget is not valid. Please check with your system administrator",
viewshedError:"An error occured while creating visibility. Please ensure your observer location falls within the extent of your elevation surface.\x3c/p\x3e",validationError:"\x3cp\x3eThe visibility creation form has missing or invalid parameters, Please ensure:\x3c/p\x3e\x3cul\x3e\x3cli\x3eAn observer location has been set.\x3c/li\x3e\x3cli\x3eThe observer Field of View is not 0.\x3c/li\x3e\x3cli\x3eThe observer height contains a valid value.\x3c/li\x3e\x3cli\x3eThe min and max observable distances contain valid values.\x3c/li\x3e\x3c/ul\x3e",
comfirmInputNotation:"Confirm Input Notation",notationsMatch:"notations match your input please confirm which you would like to use:",createBtn:"Create",clearBtn:"Clear",setCoordFormat:"Set Coordinate Format String",prefixNumbers:"Add '+/-' prefix to positive and negative numbers",parseCoordinatesError:"Unable to parse coordinates. Please check your input.",cancelBtn:"Cancel",applyBtn:"Apply",invalidMessage:"Please enter a numeric value.",observerRangeMessage:"Invalid Observer Height",minimumRangeMessage:"Invalid Minimum Observable Range",
maximumRangeMessage:"Maximum Observable Range must be greater than the Minimum Observable Range and cannot be more than ${limit} ${units}.",portalURLError:"The URL to your ArcGIS Online organization or Portal for ArcGIS is not configured. Please check with your system administrator",privilegeError:'Your user role cannot perform analysis. In order to perform analysis, the administrator of your organization needs to grant you certain \x3ca href\x3d"http://doc.arcgis.com/en/arcgis-online/reference/roles.htm" target\x3d"_blank"\x3eprivileges\x3c/a\x3e.',
noServiceError:"Elevation analysis service not available. Please check your ArcGIS Online organization or Portal for ArcGIS configurations.",pointToolTooltip:"Click to add observer location",degreesLabel:"degrees",milsLabel:"mils",DD:"DD",DDM:"DDM",DMS:"DMS",DDRev:"DDRev",DDMRev:"DDMRev",DMSRev:"DMSRev",USNG:"USNG",MGRS:"MGRS",UTM_H:"UTM (H)",UTM:"UTM",GARS:"GARS",GEOREF:"GEOREF",DDLatLongNotation:"Decimal Degrees - Latitude/Longitude",DDLongLatNotation:"Decimal Degrees  - Longitude/Latitude",DDMLatLongNotation:"Degrees Decimal Minutes - Latitude/Longitude",
DDMLongLatNotation:"Degrees Decimal Minutes - Longitude/Latitude",DMSLatLongNotation:"Degrees Minutes Seconds - Latitude/Longitude",DMSLongLatNotation:"Degrees Minutes Seconds - Longitude/Latitude",GARSNotation:"GARS",GEOREFNotation:"GEOREF",MGRSNotation:"MGRS",USNGNotation:"USNG",UTMBandNotation:"UTM - Band Letter",UTMHemNotation:"UTM - Hemisphere (N/S)",mainPageTitle:"Radial Line of Sight",resultsTitle:"Results",publishBtnLabel:"Publish",layerName:"Published Layer Name",invalidLayerName:"Layer name must only contain alpha-numeric characters and underscores",
missingLayerName:"Enter layer name",back:"Back",publishingFailedLayerExists:"Publishing Failed: You already have a feature service named {0}. Please choose another name.",checkService:"Check Service: {0}",createService:"Create Service: {0}",unableToCreate:"Unable to create: {0}",addToDefinition:"Add to definition: {0}",successfullyPublished:"Successfully published web layer{0}Manage the web layer",userRole:"Unable to create service because user does not have permissions",publishToNewLayer:"Publish results to a new feature layer",
missingLayerNameMessage:"You must enter a valid layer name before you can publish",layerNameExists:"Layer name already exists. Please use a different layer name.",regionTypeLabel:"Region Type",centerPointLabel:"Center Point",observationHeightLabel:"Observation Height",heightUnitLabel:"Height Unit",minObservationDistanceLabel:"MinObservation Distance",maxObservationDistance:"MaxObservation Distance",distanceUnitLabel:"Distance Unit",fovstartAngleLabel:"FOV Start Angle",fovEndAngleLabel:"FOV End Angle",
andleUnitsLabel:"Angle Units",_localized:{ar:1,bs:1,ca:1,cs:1,da:1,de:1,el:1,es:1,et:1,fi:1,fr:1,he:1,hr:1,hu:1,id:1,it:1,ja:1,ko:1,lt:1,lv:1,nb:1,nl:1,pl:1,"pt-br":1,"pt-pt":1,ro:1,ru:1,sl:1,sr:1,sv:1,th:1,tr:1,uk:1,vi:1,"zh-cn":1,"zh-hk":1,"zh-tw":1}}});