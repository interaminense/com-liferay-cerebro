import JSXComponent from 'metal-jsx';
import BasePage from 'shared/components/BasePage';
import {Header, Card, Button, Footer} from '../components';

class WorkflowPage extends JSXComponent {
	render() {
		return (
			<BasePage topBarTitle={Liferay.Language.get('workflow')}>
				<Header title="My Company Site > Workflow" />
				<main>
					<div class="container-fluid">
						<DropdownSection />
						<CardSection />
						<TableSection />
					</div>
				</main>
				<Footer title="© Copyright 2017" />
			</BasePage>
		);
	}
}

class DropdownSection extends JSXComponent {
	render() {
		return (
			<div class="row">
				<div class="col-sm-12 text-right">
					<span>Dropdown 1</span>
					<span>Dropdown 2</span>
				</div>
			</div>
		);
	}
}

class CardSection extends JSXComponent {
	render() {
		return (
			<div class="row">
				<div class="col-md-5 col-sm-12">
					<div class="row row__no-margin">
						<div class="col-md-4 col-sm-12">
							<Card icon="share" number="9" title="Workflows" />
						</div>
						<div class="col-md-4 col-sm-12">
							<Card icon="play" number="7" title="Published" />
						</div>
						<div class="col-md-4 col-sm-12">
							<Card icon="live" number="2" title="Unpublished" />
						</div>
					</div>
				</div>
				<div class="col-md-7 col-sm-12">
					<div class="row row__no-margin">
						<div class="col-md-3 col-sm-12">
							<Card
								icon="organizations"
								number="185"
								title="Process"
							/>
						</div>
						<div class="col-md-3 col-sm-12">
							<Card
								icon="check-circle"
								number="116"
								title="Started"
							/>
						</div>
						<div class="col-md-3 col-sm-12">
							<Card
								icon="reload"
								number="66"
								title="In Progress"
							/>
						</div>
						<div class="col-md-3 col-sm-12">
							<Card icon="times" number="3" title="Completed" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

class TableSection extends JSXComponent {
	renderTableBody() {
		const {items} = this.state;

		return [].map.call(items, (item, index) => {
			return (
				<tr>
					<td class="text-left">{item.workflow}</td>
					<td class="text-center">{item.status}</td>
					<td class="text-right">{item.process}</td>
					<td class="text-right">{item.started}</td>
					<td class="text-right">{item.inProgress}</td>
					<td class="text-right">{item.completed}</td>
					<td class="text-right">
						<Button label="view report" style="primary" />
					</td>
				</tr>
			);
		});
	}

	render() {
		return (
			<div class="row">
				<div class="col-sm-12">
					<table class="table-dashboard table table-autofit table-list table-responsive-lg">
						<thead>
							<tr>
								<th class="text-left">Workflow</th>
								<th class="text-center">Status</th>
								<th class="text-right">Process</th>
								<th class="text-right">Started</th>
								<th class="text-right">In Progress</th>
								<th class="text-right">Completed</th>
								<th class="text-right" />
							</tr>
						</thead>
						<tbody>{this.renderTableBody()}</tbody>
					</table>
				</div>
			</div>
		);
	}
}

TableSection.STATE = {
	items: {
		value: [
			{
				workflow: 'New Hirings - ENG',
				status: 'Active',
				process: 30,
				started: 20,
				inProgress: 8,
				completed: 2
			},
			{
				workflow: 'New Hirings - ENG',
				status: 'Active',
				process: 30,
				started: 20,
				inProgress: 8,
				completed: 2
			},
			{
				workflow: 'New Hirings - ENG',
				status: 'Active',
				process: 30,
				started: 20,
				inProgress: 8,
				completed: 2
			},
			{
				workflow: 'New Hirings - ENG',
				status: 'Active',
				process: 30,
				started: 20,
				inProgress: 8,
				completed: 2
			},
			{
				workflow: 'New Hirings - ENG',
				status: 'Active',
				process: 30,
				started: 20,
				inProgress: 8,
				completed: 2
			}
		]
	}
};

export {WorkflowPage};
export default WorkflowPage;