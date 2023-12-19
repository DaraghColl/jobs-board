describe('jobs filters and pages', () => {
	beforeEach(() => cy.visit('/'));

	const departments: string[] = ['engineering', 'marketing', 'sales'];

	it('shows correct heading on home page', () => {
		cy.get('h1').contains('Job Openings');
	});

	departments.forEach((department) => {
		it(`shows correct url and heading on ${department} page`, () => {
			cy.get('[data-cy="department_filter_link"]')
				.contains(`${department}`)
				.click()
				.then(() => {
					cy.url().should('include', `/jobs/department/${department}`);

					cy.get('h1').contains(`Job Openings in ${department}`);
				});
		});
	});
});
