import autobind from 'autobind-decorator';
import Component, {Config} from 'metal-jsx';
import getCN from 'classnames';

import Button from './Button';
import Icon from './Icon';
import Overlay, {ALIGNMENTS} from './Overlay';

const ALIGNMENTS_ICON_MAP = {
	bottomCenter: 'caret-bottom',
	bottomLeft: 'caret-bottom',
	bottomRight: 'caret-bottom',
	leftCenter: 'caret-top',
	rightCenter: 'caret-top',
	topCenter: 'caret-top',
	topLeft: 'caret-top',
	topRight: 'caret-top'
};

class Section extends Component {
	render() {
		return <div class="dropdown-section">{this.props.children}</div>;
	}
}

class Subheader extends Component {
	render() {
		return <div class="dropdown-subheader">{this.props.children}</div>;
	}
}

class Item extends Component {
	@autobind
	handleClick() {
		const {hideOnClick, onClick} = this.props;

		onClick();

		if (hideOnClick && this.context.dropdown) {
			this.context.dropdown.hideMenu();
		}
	}

	render() {
		const {active, children, href} = this.props;

		const classes = getCN('dropdown-item', 'text-truncate', {active});

		return do {
			if (href) {
				<a {...this.otherProps()} class={classes} href={href}>
					{this.props.children}
				</a>;
			} else {
				<Button
					{...this.otherProps()}
					elementClasses={classes}
					onClick={this.handleClick}
				>
					{children}
				</Button>;
			}
		};
	}
}

Item.PROPS = {
	active: Config.bool().value(false),
	hideOnClick: Config.bool().value(false),
	href: Config.string(),
	onClick: Config.func()
};

class Dropdown extends Component {
	getChildContext() {
		return {
			dropdown: {
				hideMenu: this.handleToggle
			}
		};
	}

	@autobind
	handleOutsideClick() {
		this.state.active = false;
	}

	@autobind
	handleToggle() {
		this.state.active = !this.state.active;
	}

	render() {
		const {
			props: {
				align,
				buttonProps,
				caretDouble,
				children,
				disabled,
				elementClasses,
				forceAlignment,
				icon,
				label,
				readOnly,
				showCaret,
				toggleClasses
			},
			state: {active}
		} = this;

		const buttonClasses = getCN(
			'dropdown-toggle',
			{'nav-link': this.context.navbar},
			toggleClasses
		);

		const classes = getCN('dropdown', 'dropdown-root', elementClasses);

		return (
			<Overlay
				active={active}
				alignment={align}
				containerClass={classes}
				forceAlignment={forceAlignment}
				onOutsideClick={this.handleOutsideClick}
			>
				<div {...this.otherProps()} class={classes}>
					<Button
						{...buttonProps}
						disabled={disabled}
						elementClasses={buttonClasses}
						onClick={this.handleToggle}
					>
						<span class="text-truncate">
							{label && `${label} `}
						</span>

						{icon && (
							<span>
								<Icon symbol={icon} />
							</span>
						)}

						{!readOnly &&
							!icon &&
							showCaret && (
								<span>
									<Icon
										symbol={
											caretDouble
												? 'caret-double'
												: ALIGNMENTS_ICON_MAP[align]
										}
									/>
								</span>
							)}
					</Button>
				</div>

				<div class="dropdown-menu show">{children}</div>
			</Overlay>
		);
	}
}

Dropdown.PROPS = {
	align: Config.oneOf(ALIGNMENTS).value('bottomLeft'),
	buttonProps: Config.object().value({}),
	caretDouble: Config.bool(),
	disabled: Config.bool().value(false),
	forceAlignment: Config.bool().value(false),
	icon: Config.string().value(''),
	label: Config.oneOfType([Config.string(), Config.number()]),
	readOnly: Config.bool(),
	showCaret: Config.bool().value(true),
	toggleClasses: Config.string()
};

Dropdown.STATE = {
	active: Config.bool().value(false)
};

Dropdown.ALIGNMENTS = ALIGNMENTS;

Dropdown.Item = Item;
Dropdown.Section = Section;
Dropdown.Subheader = Subheader;

export default Dropdown;