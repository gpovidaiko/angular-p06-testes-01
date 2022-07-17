import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { LikeWidgetModule } from './shared/components/like-widget/like-widget.module';

describe(AppComponent.name, () => {
	let app: AppComponent;
	let fixture: ComponentFixture<AppComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
				LikeWidgetModule
			],
			declarations: [
				AppComponent
			],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AppComponent);
		app = fixture.componentInstance;
	});

	it('should create the app', () => {
		expect(app).toBeTruthy();
	});

	it(`should have as title 'angular-p06-testes-01'`, () => {
		expect(app.title).toEqual('angular-p06-testes-01');
	});

	/* it('should render title', () => {
		const compiled = fixture.nativeElement as HTMLElement;
		expect(compiled.querySelector('.content span')?.textContent).toContain('angular-p06-testes-01 app is running!');
	}); */
});
