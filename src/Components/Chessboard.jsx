import './Chessboard.css';
import { faChessPawn,faChessKnight,faChessRook,faChessBishop,faChessKing,faChessQueen } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
export default function Board(){

    return(
        <div className="ChessBoard">
            <table>
                <tr>
                    <td className='black'><FontAwesomeIcon className="bk"  icon={faChessRook} /></td>
                    <td className='white'><FontAwesomeIcon className="bk"  icon={faChessKnight} /></td>
                    <td className='black'><FontAwesomeIcon className="bk"  icon={faChessBishop} /></td>
                    <td className='white'><FontAwesomeIcon className="bk"  icon={faChessKing} /></td>
                    <td className='black'><FontAwesomeIcon className="bk"  icon={faChessQueen} /></td>
                    <td className='white'><FontAwesomeIcon className="bk"  icon={faChessBishop} /></td>
                    <td className='black'><FontAwesomeIcon className="bk"  icon={faChessKnight} /></td>
                    <td className='white'><FontAwesomeIcon className="bk"  icon={faChessRook} /></td>
                </tr>
                <tr>
                    <td className='white'><FontAwesomeIcon className="bk" icon={faChessPawn} /></td>
                    <td className='black'><FontAwesomeIcon className="bk" icon={faChessPawn} /></td>
                    <td className='white'><FontAwesomeIcon className="bk" icon={faChessPawn} /></td>
                    <td className='black'><FontAwesomeIcon className="bk" icon={faChessPawn} /></td>
                    <td className='white'><FontAwesomeIcon className="bk" icon={faChessPawn} /></td>
                    <td className='black'><FontAwesomeIcon className="bk" icon={faChessPawn} /></td>
                    <td className='white'><FontAwesomeIcon className="bk" icon={faChessPawn} /></td>
                    <td className='black'><FontAwesomeIcon className="bk" icon={faChessPawn} /></td>
                </tr>
                <tr>
                    <td className='black'></td>
                    <td className='white'></td>
                    <td className='black'></td>
                    <td className='white'></td>
                    <td className='black'></td>
                    <td className='white'></td>
                    <td className='black'></td>
                    <td className='white'></td>
                </tr>
                <tr>
                <td className='white'></td>
                    <td className='black'></td>
                    <td className='white'></td>
                    <td className='black'></td>
                    <td className='white'></td>
                    <td className='black'></td>
                    <td className='white'></td>
                    <td className='black'></td>
                </tr>
                <tr>
                    <td className='black'></td>
                    <td className='white'></td>
                    <td className='black'></td>
                    <td className='white'></td>
                    <td className='black'></td>
                    <td className='white'></td>
                    <td className='black'></td>
                    <td className='white'></td>
                </tr>
                <tr>
                <td className='white'></td>
                    <td className='black'></td>
                    <td className='white'></td>
                    <td className='black'></td>
                    <td className='white'></td>
                    <td className='black'></td>
                    <td className='white'></td>
                    <td className='black'></td>
                </tr>
                <tr>
                    <td className='black'><FontAwesomeIcon className="wp" icon={faChessPawn} style={{color: "#ffffff",}} /></td>
                    <td className='white'><FontAwesomeIcon className="wp" icon={faChessPawn} style={{color: "#ffffff",}} /></td>
                    <td className='black'><FontAwesomeIcon className="wp" icon={faChessPawn} style={{color: "#ffffff",}} /></td>
                    <td className='white'><FontAwesomeIcon className="wp" icon={faChessPawn} style={{color: "#ffffff",}} /></td>
                    <td className='black'><FontAwesomeIcon className="wp" icon={faChessPawn} style={{color: "#ffffff",}} /></td>
                    <td className='white'><FontAwesomeIcon className="wp" icon={faChessPawn} style={{color: "#ffffff",}} /></td>
                    <td className='black'><FontAwesomeIcon className="wp" icon={faChessPawn} style={{color: "#ffffff",}} /></td>
                    <td className='white'><FontAwesomeIcon className="wp" icon={faChessPawn} style={{color: "#ffffff",}} /></td>
                </tr>
                <tr>
                    <td className='white'><FontAwesomeIcon className="wp" icon={faChessRook} style={{color: "#ffffff",}} /></td>
                    <td className='black'><FontAwesomeIcon className="wp" icon={faChessKnight} style={{color: "#ffffff",}} /></td>
                    <td className='white'><FontAwesomeIcon className="wp" icon={faChessBishop} style={{color: "#ffffff",}} /></td>
                    <td className='black'><FontAwesomeIcon className="wp" icon={faChessKing} style={{color: "#ffffff",}} /></td>
                    <td className='white'><FontAwesomeIcon className="wp" icon={faChessQueen} style={{color: "#ffffff",}} /></td>
                    <td className='black'><FontAwesomeIcon className="wp" icon={faChessBishop} style={{color: "#ffffff",}} /></td>
                    <td className='white'><FontAwesomeIcon className="wp" icon={faChessKnight} style={{color: "#ffffff",}} /></td>
                    <td className='black'><FontAwesomeIcon className="wp" icon={faChessRook} style={{color: "#ffffff",}} /></td>
                </tr>
            </table>
        </div>
    )
}