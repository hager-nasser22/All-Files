import javax.swing.JFrame;
import java.awt.Color;
import javax.swing.JPanel;
import java.awt.Graphics;
class TextPanal extends JPanel implements Runnable{
    int x = -172;
    public TextPanal() {
        this.setBackground(Color.black);
        this.setForeground(Color.WHITE);
        new Thread(this).start();
    }
    @Override
    public void paintComponent(Graphics com){
        super.paintComponent(com);
        com.drawString("Hello", this.x = this.x+150, 200);
    }
    public void run(){
        while(true){
            while(this.x < this.getWidth()){
                try{
                    this.repaint();
                    Thread.sleep(1000);
                } catch(InterruptedException ex){
                     System.out.println("error"); 
                }
            }
            this.x = -172;           
        }
    }
}
class TextMove{
    public static void main(String []args){
        new Thread(new TextPanal()).start();
        JFrame jfm = new JFrame();
        TextPanal txtpn = new TextPanal();
        jfm.setTitle("frame2");
        jfm.setContentPane(txtpn);
        jfm.setSize(800,800);
        jfm.setVisible(true);
    }
}