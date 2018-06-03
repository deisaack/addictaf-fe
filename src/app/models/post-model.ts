export class PostModel {
  constructor(
    public id: number,
    public image_hd: string,
    public image_sm: string,
    public tags: any,
    public video_hd: string,
    public video_sm: string,
    public up_votes: number,
    public down_votes: number,
    public caption: string,
    public created: string,
    public is_video: boolean,
    public views?: boolean
  ) {}
}

export class QueryParams {
  constructor(
    public limit: number,
    public ordering?: string,
    public search?: string,
    public filter?: string,
    public is_video?: boolean,
    public tags?: string,
    public category?: string,
    public offset?: number
  ) {}
}
