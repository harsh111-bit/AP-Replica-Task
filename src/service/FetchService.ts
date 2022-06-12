import axios from "axios";
import { DetailsProps } from "../components/Details";

export const FetchService = {

     fetchDetails: (): Promise<DetailsProps | void> => {
          return axios.get('https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3')
             .then((res) => {
                 return {
                    imageURL: res.data.details.thumbnail.domain + '/' + res.data.details.thumbnail.basePath + '/' + res.data.details.thumbnail.qualities[0].toString() + '/' + res.data.details.thumbnail.key,
                    title: res.data.details.title,
                    subtitle: res.data.details.subtitle,
                    content: res.data.details.description
                 }
             })
             .catch((c) => console.log("FETCH-1 -->", c));
     }


}

export interface FetchedDetails {
    title: string;
    subtitle: string;
    description: string;
    domain: string;
    basePath: string;
}