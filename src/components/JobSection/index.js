import {Component} from 'react'
// eslint-disable-next-line no-unused-vars
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import JobCard from '../JobCard'

import './index.css'

// eslint-disable-next-line no-unused-vars
const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]
// eslint-disable-next-line no-unused-vars
const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class JobSections extends Component {
  state = {
    jobsData: [],
    apiStatus: apiStatusConstant.initial,
    activeOptionId: '',
    searchInput: '',
    activeEmploymentType: '',
    activeSalaryRange: '',
  }

  componentDidMount() {
    this.getJobsData()
  }

  getFormattedData = data => ({
    companyLogoUrl: jobs.company_logo_url,
    employmentType:jobs.employment_type,
    id: jobs.id,
    jobDescription: jobs.job_description,
    location: jobs.location,
    packagePerAnnum: jobs.package_per_annum,
    title: jobs.title,
    rating: jobs.rating,
  })

  getJobsData = async () => {
    this.setState({
      apiStatus: apiStatusConstant.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const {
      // eslint-disable-next-line no-unused-vars
      activeOptionId,
      // eslint-disable-next-line no-unused-vars
      searchInput,
      activeEmploymentType,
      activeSalaryRange,
    } = this.state
    const apiUrl = `https://apis.ccbp.in/jobs?employment_type=${activeEmploymentType}&minimum_package=${activeSalaryRange}&search=`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = this.getFormattedData(fetchedData)
      this.setState({
        jobsData: updatedData,
        apiStatus: apiStatusConstant.success
      })
    }
    if(response.status===404){
        this.setState({
            apiStatus: apiStatusConstant.failure,
        })
    }
    }
  }
   renderLoadingView = () => (
    <div className="products-details-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderFailureView =() =>{
      <div className="jobs-details-error-view-container">
      <img
        alt="error view"
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        className="error-view-image"
      />
      <h1 className="job-not-found-heading">Opps! Something Went Wrong </h1>
      <p className='job-not-found-description'>We cannot seem to find the page you are looking for</p>
      <button type="button" className="button">
        Retry
      </button>
    </div>
  }

  renderJobsDetailsView = () =>{
    const {jobsData} = this.state
    return(
       <>
       <ul className='jobs-list'>
           {jobsData.map(jobs =>(<JobCard jobsDetails = {jobs} key={jobs.id} />))}
       </ul>
       </>
    )
}  

  renderJobsDetails =() =>{
      const {apiStatus} = this.state

      switch (apiStatus) {
          case apiStatusConstant.success:
              return this.renderJobsDetailsView()
            case (apiStatusConstant.failure):
                return this.renderFailureView()
            case (apiStatusConstant.inProgress):
                return this.renderLoadingView()
          default:
              return null
      }
  }

  render() {
    const {
      // eslint-disable-next-line no-unused-vars
      activeOptionId,
      // eslint-disable-next-line no-unused-vars
      searchInput,
      // eslint-disable-next-line no-unused-vars
      activeEmploymentType,
      // eslint-disable-next-line no-unused-vars
      activeSalaryRange,
    } = this.state

    return (
      <div>
        {renderJobsDetails}
      </div>
    )
  }
}
export default JobSections
