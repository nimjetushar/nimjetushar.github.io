export type PanelEntity = {
  title: string;
  subTitle: string;
  body?: string;
};

type Props = PanelEntity & {
  inverted: boolean;
};

export const TimelinePanel: React.FC<Props> = (props) => {
  return (
    <li className={props.inverted ? 'timeline-inverted' : 'timeline-unverted'}>
      <div className="timeline-badge">
        <i className="icon-suitcase"></i>
      </div>
      <div className="timeline-panel">
        <div className="timeline-heading">
          <h3 className="timeline-title">{props.title}</h3>
          <span className="company">{props.subTitle}</span>
        </div>
        {props.body && (
          <div className="timeline-body">
            <p>{props.body}</p>
          </div>
        )}
      </div>
    </li>
  );
};
