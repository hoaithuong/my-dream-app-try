import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown-angular7';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KpiComponent } from './kpi/kpi.component';
import { ColumnchartComponent } from './columnchart/columnchart.component';
import { AreachartComponent } from './areachart/areachart.component';
import { BarchartComponent } from './barchart/barchart.component';
import { BubblechartComponent } from './bubblechart/bubblechart.component';
import { CombochartComponent } from './combochart/combochart.component';
import { DonutchartComponent } from './donutchart/donutchart.component';
import { HeadlinemultiComponent } from './headlinemulti/headlinemulti.component';
import { HeadlinesingleComponent } from './headlinesingle/headlinesingle.component';
import { HeatmapComponent } from './heatmap/heatmap.component';
import { LinechartComponent } from './linechart/linechart.component';
import { PiechartComponent } from './piechart/piechart.component';
import { ScatterplotComponent } from './scatterplot/scatterplot.component';
import { TableComponent } from './table/table.component';
import { TreemapComponent } from './treemap/treemap.component';
import { KpiabsolutedatefilterComponent } from './kpiabsolutedatefilter/kpiabsolutedatefilter.component';
import { KpinegativeattributefilterComponent } from './kpinegativeattributefilter/kpinegativeattributefilter.component';
import { KpipositiveattributefilterComponent } from './kpipositiveattributefilter/kpipositiveattributefilter.component';
import { PivottableComponent } from './pivottable/pivottable.component';
import { DynamicMeasuresExampleComponent } from './dynamic-measures-example/dynamic-measures-example.component';
import { DrillEmployeeKpiChartComponent } from './GlobalFiltersComponents/drill-employee-kpi-chart/drill-employee-kpi-chart.component';
import { GlobalFiltersComponent } from './global-filters/global-filters.component';
import { KpiDailySaleComponent } from './GlobalFiltersComponents/kpi-daily-sale/kpi-daily-sale.component';
import { KpiCheckAmountComponent } from './GlobalFiltersComponents/kpi-check-amount/kpi-check-amount.component';
import { PiechartDailySalebyMenuItemComponent } from './GlobalFiltersComponents/piechart-daily-saleby-menu-item/piechart-daily-saleby-menu-item.component';
import { BarchartDailySalebyMenuItemComponent } from './GlobalFiltersComponents/barchart-daily-saleby-menu-item/barchart-daily-saleby-menu-item.component';
import { AttributeFiltersComponent } from './GlobalFiltersComponents/attribute-filters/attribute-filters.component';
import { AttributeElementsExampleComponent } from './GlobalFiltersComponents/attribute-elements-example/attribute-elements-example.component';
import { ExampleTryItOnTryItOnComponent } from './GlobalFiltersComponents/example-try-it-on-try-it-on/example-try-it-on-try-it-on.component';
import { ParentFilterExampleComponent } from './ParentFilterComponents/parent-filter-example/parent-filter-example.component';
import { BarchartForParentComponent } from './ParentFilterComponents/barchart-for-parent/barchart-for-parent.component';
import { BarchartForParentExampleComponent } from './ParentFilterComponents/barchart-for-parent-example/barchart-for-parent-example.component';
import { FilterOfFilterComponent } from './ParentFilterComponents/filter-of-filter/filter-of-filter.component';
import { GlobalFiltersExampleComponent } from './GlobalFiltersComponents/global-filters-example/global-filters-example.component';
import { AfmBarchartComponent } from './afm-barchart/afm-barchart.component';
import { FilterDropdownValuesComponent } from './ParentFilterComponents/filter-dropdown-values/filter-dropdown-values.component';
import { ParentFilterUseSelectComponent } from './ParentFilterComponents/parent-filter-use-select/parent-filter-use-select.component';
import { TryWithSelectComponent } from './ParentFilterComponents/try-with-select/try-with-select.component';
import { ResponsiveChartComponent } from './responsive-chart/responsive-chart.component';
import { ExampleWithExportComponent } from './utils/example-with-export/example-with-export.component';
import { ExampleWithSourceComponent } from './utils/example-with-source/example-with-source.component';
import { BarChartExportExampleComponent } from './ExportExample/bar-chart-export-example/bar-chart-export-example.component';
import { MeasureValueFiltersExampleComponent } from './measure-value-filters-example/measure-value-filters-example.component';
import { TableExportExampleComponent } from './ExportExample/table-export-example/table-export-example.component';
import { PivotTableExportExampleComponent } from './ExportExample/pivot-table-export-example/pivot-table-export-example.component';
import { HeadlineExportExampleComponent } from './ExportExample/headline-export-example/headline-export-example.component';
import { VisualizationColumnChartExportExampleComponent } from './ExportExample/visualization-column-chart-export-example/visualization-column-chart-export-example.component';
import { ThgtestComponent } from './utils/thgtest/thgtest.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { ChartConfigurationComponent } from './chart-configuration/chart-configuration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { BarChartWithSourceComponent } from './SourceExamples/bar-chart-with-source/bar-chart-with-source.component';

@NgModule({
  declarations: [
    AppComponent,
    KpiComponent,
    ColumnchartComponent,
    AreachartComponent,
    BarchartComponent,
    BubblechartComponent,
    CombochartComponent,
    DonutchartComponent,
    HeadlinemultiComponent,
    HeadlinesingleComponent,
    HeatmapComponent,
    LinechartComponent,
    PiechartComponent,
    ScatterplotComponent,
    TableComponent,
    TreemapComponent,
    KpiabsolutedatefilterComponent,
    KpinegativeattributefilterComponent,
    KpipositiveattributefilterComponent,
    PivottableComponent,
    DynamicMeasuresExampleComponent,
    DrillEmployeeKpiChartComponent,
    GlobalFiltersComponent,
    KpiDailySaleComponent,
    KpiCheckAmountComponent,
    PiechartDailySalebyMenuItemComponent,
    BarchartDailySalebyMenuItemComponent,
    AttributeFiltersComponent,
    AttributeElementsExampleComponent,
    ExampleTryItOnTryItOnComponent,
    ParentFilterExampleComponent,
    BarchartForParentComponent,
    BarchartForParentExampleComponent,
    FilterOfFilterComponent,
    GlobalFiltersExampleComponent,
    AfmBarchartComponent,
    FilterDropdownValuesComponent,
    ParentFilterUseSelectComponent,
    TryWithSelectComponent,
    ResponsiveChartComponent,
    ExampleWithExportComponent,
    ExampleWithSourceComponent,
    BarChartExportExampleComponent,
    MeasureValueFiltersExampleComponent,
    TableExportExampleComponent,
    PivotTableExportExampleComponent,
    HeadlineExportExampleComponent,
    VisualizationColumnChartExportExampleComponent,
    ThgtestComponent,
    DatePickerComponent,
    ChartConfigurationComponent,
    
    // BarChartWithSourceComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgMultiSelectDropDownModule.forRoot(),
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
