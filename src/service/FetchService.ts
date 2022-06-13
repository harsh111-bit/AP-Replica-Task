import axios from "axios";
import { DetailsProps } from "../components/Details";
import { Utils } from "../utils/utils";

const coursesEndpoint = 'https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3';

export const FetchService = {

     fetchDetails: (): Promise<DetailsProps | void> => {
          return axios.get(coursesEndpoint)
             .then((res) => {
                 return {
                    imageURL:  Utils.joinedImageURL(res.data.details.thumbnail.domain, res.data.details.thumbnail.basePath, res.data.details.thumbnail.qualities[0], res.data.details.thumbnail.key),
                    title: res.data.details.title,
                    subtitle: res.data.details.subtitle,
                    content: res.data.details.description,
                 }
             })
             .catch((c) => console.log("ERROR-01", c));
     },

     fetchCourses: (): Promise<{coursesCount: number, courses: any[]} | void> => {
       return axios.get(coursesEndpoint)
            .then((res) => {
                return {
                  coursesCount: res.data.details.coursesCount,
                  courses: res.data.courses
                }
            })
            .catch((c) => console.log("ERROR-02", c));
     },

     fetchTags: (): Promise<any[] | void> => {
      return axios.get('https://api.acharyaprashant.org/v2/legacy/courses/tags')
                  .then((res) => {
                    return res.data[0]
                  })
                  .catch((c) => console.log("ERROR-03", c));
     },

     fetchRelatedCourses: (): Promise<{relatedCourses: any[]} | void> => {
      return axios.get(coursesEndpoint)
                  .then((res) => {
                    return {
                      relatedCourses: res.data.relatedContent
                    }
                  })
                  .catch((c) => console.log('ERROR-04', c));
     },

     fetchFAQs: (): Promise<{faqs: {question: string, answer: string}[]} | void> => {
      return axios.get('https://api.acharyaprashant.org/v2/legacy/courses/faqs?language=english')
                  .then((res) => {
                     return {
                      faqs: res.data
                     }
                  })
                  .catch((c) => console.log("ERROR-05", c));
     },
}

export interface FetchedDetails {
    title: string;
    subtitle: string;
    description: string;
    domain: string;
    basePath: string;
}