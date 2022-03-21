import ProfileDetails from '../ProfileDetails'
import './index.css'

const FilterGroup = props => {
  const getEmploymentTypeList = () => {
    const {employmentTypesList} = props

    return employmentTypesList.map(employee => {
      const {changeEmploymentType} = props
      const onChangeEmployType = event =>
        changeEmploymentType(event.target.value)

      return (
        <li
          className="checkbox-list-items"
          key={employee.employmentTypeId}
          onChange={onChangeEmployType}
        >
          <input
            type="checkbox"
            className="check-radio"
            id={employee.employmentTypeId}
            value={employee.employmentTypeId}
          />
          <label htmlFor={employee.employmentTypeId} className="check-label">
            {employee.label}
          </label>
        </li>
      )
    })
  }

  const renderEmploymentType = () => (
    <div className="salary-container">
      <h1 className="salary-heading">Type of Employment</h1>
      <ul className="salary-range-container">{getEmploymentTypeList()}</ul>
    </div>
  )

  const getSalaryRangeList = () => {
    const {salaryRangesList} = props

    return salaryRangesList.map(salary => {
      const {changeSalaryRange} = props
      const onChangeSalary = () => changeSalaryRange(salary.salaryRangeId)

      return (
        <li
          className="checkbox-list-items"
          key={salary.salaryRangeId}
          onChange={onChangeSalary}
        >
          <input
            type="radio"
            className="check-radio"
            id={salary.salaryRangeId}
            name="salary"
          />
          <label htmlFor={salary.salaryRangeId} className="check-label">
            {salary.label}
          </label>
        </li>
      )
    })
  }

  const renderSalaryRange = () => (
    <div className="salary-container">
      <h1 className="salary-heading">Salary Range</h1>
      <ul className="salary-range-container">{getSalaryRangeList()}</ul>
    </div>
  )

  return (
    <div className="job-filter-group">
      <ProfileDetails />
      <hr className="horizontal-line" />
      {renderEmploymentType()}
      <hr className="horizontal-line" />
      {renderSalaryRange()}
    </div>
  )
}

export default FilterGroup
