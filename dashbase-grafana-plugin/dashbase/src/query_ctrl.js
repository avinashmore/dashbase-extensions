import {QueryCtrl} from 'app/plugins/sdk';

export class DashbaseDatasourceQueryCtrl extends QueryCtrl {
	constructor($scope, $injector, uiSegmentSrv) {
		super($scope, $injector);

		this.scope = $scope;
		this.uiSegmentSrv = uiSegmentSrv;
		this.target.target = this.target.target;
		this.target.query = this.target.query || "";
		this.target.type = "sql"; // uses the sql endpoint
	}

	getOptions() {
		return this.datasource.metricFindQuery(this.target).then(this.uiSegmentSrv.transformToSegments(false));
    // Options have to be transformed by uiSegmentSrv to be usable by metric-segment-model directive
  }

  toggleEditorMode() {
    this.target.rawQuery = !this.target.rawQuery; // show textarea vs input box
  }	

  refresh() {
    this.panelCtrl.refresh(); // request for panel refresh
  }
}

DashbaseDatasourceQueryCtrl.templateUrl = 'partials/query.editor.html';
