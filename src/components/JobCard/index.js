import {AiOutlineStar} from 'react-icons/ai'
import {IoLocationOutline} from 'react-icons/io'
import {BsBriefcase} from 'react-icons/bs'
import './index.css'

const JobCard = props => {
  const {jobsDetails} = props
  const {
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    packagePerAnnum,
    title,
    rating,
  } = jobsDetails
  return (
    <li className="job-container-card">
      <div className="title-logo-rating-container">
        <img src={companyLogoUrl} alt="company logo" className="company-logo" />
        <div className="title-rating-container">
          <h1 className="title-heading">{title}</h1>
          <div className="rating-container">
            <AiOutlineStar className="rating-logo" />
            <p className="rating-value">{rating}</p>
          </div>
        </div>
      </div>
      <div className="job-location-package=container">
        <div>
          <div className="location-container">
            <IoLocationOutline className="location-logo" />
            <p className="location">{location}</p>
          </div>
          <div className="employment-type-container">
            <BsBriefcase className="job-logo" />
            <p className="employment-type">{employmentType}</p>
          </div>
        </div>
        <h1 className="package-per-annum">{packagePerAnnum}</h1>
      </div>
      <hr className="horizontal-line" />
      <div className="description-container">
        <h1 className="description-heading">Description</h1>
        <p className="description-details">{jobDescription}</p>
      </div>
    </li>
  )
}
export default JobCard
