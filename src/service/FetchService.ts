import axios from "axios";
import { LocalStorageService } from "./LocalStorageService";

export const FetchService = {

     fetchDetails: () => {
           axios.get('https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3')
             .then((res) => {
                 LocalStorageService.setCourses(res.data);
             })
             .catch((c) => console.log("ERROR-01", c));
     },

     fetchTags: (): Promise<any[] | void> => {
      return axios.get('https://api.acharyaprashant.org/v2/legacy/courses/tags')
                  .then((res) => {
                    return res.data[0]
                  })
                  .catch((c) => console.log("ERROR-03", c));
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
