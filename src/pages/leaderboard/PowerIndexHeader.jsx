export default function PowerIndexHeader() {
    return (
      <header className="pi-public-header">
        <div>
          <span className="pi-public-code">
            KVI // LORE ARCHIVE // RESTRICTED DATABASE
          </span>
  
          <h1>
            S.T.A.T.I.C. Power Index
          </h1>
        </div>
  
        <div className="pi-public-access">
          <span>
            TERMINAL ACCESS
          </span>
  
          <strong>
            ACTIVE
          </strong>
        </div>
  
        <style>{`
          .pi-public-header {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 20px;
  
            margin-bottom: 12px;
            padding: 0 4px;
          }
  
          .pi-public-code {
            display: block;
  
            margin-bottom: 5px;
  
            color: rgba(245, 200, 66, 0.62);
  
            font-size: 7px;
            font-weight: 900;
            letter-spacing: 0.2em;
          }
  
          .pi-public-header h1 {
            margin: 0;
  
            color: #f5c842;
  
            font-size: clamp(
              16px,
              2vw,
              22px
            );
  
            font-weight: 750;
            letter-spacing: 0.12em;
          }
  
          .pi-public-access {
            flex: 0 0 auto;
  
            padding: 7px 9px;
  
            border:
              1px solid rgba(
                245,
                200,
                66,
                0.26
              );
  
            text-align: right;
          }
  
          .pi-public-access span {
            display: block;
  
            margin-bottom: 2px;
  
            color:
              rgba(
                245,
                200,
                66,
                0.46
              );
  
            font-size: 6px;
            font-weight: 900;
            letter-spacing: 0.11em;
          }
  
          .pi-public-access strong {
            color: #f5c842;
  
            font-size: 8px;
            letter-spacing: 0.08em;
          }
  
          @media (max-width: 600px) {
            .pi-public-header {
              align-items: flex-start;
            }
  
            .pi-public-access {
              display: none;
            }
          }
        `}</style>
      </header>
    );
  }